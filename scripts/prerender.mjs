#!/usr/bin/env node
// Post-build prerender: visits each sitemap route in headless Chrome
// and saves the rendered HTML so crawlers and AI engines see real content.

import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "serve-handler";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const SITEMAP = path.join(DIST, "sitemap.xml");
const SITE_ORIGIN = "https://marinoindia.co.in";
const PORT = 39823;
const NAV_TIMEOUT = 30_000;
const SETTLE_MS = 600; // small extra wait so async content paints

if (!existsSync(DIST)) {
  console.error(`[prerender] dist/ not found at ${DIST}. Run \`vite build\` first.`);
  process.exit(1);
}

async function loadRoutesFromSitemap() {
  const xml = await readFile(SITEMAP, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const routes = new Set();
  for (const loc of locs) {
    try {
      const url = new URL(loc);
      // Only same-origin entries
      if (url.origin !== SITE_ORIGIN) continue;
      let pathname = url.pathname || "/";
      // Strip trailing slash except for root
      if (pathname.length > 1 && pathname.endsWith("/")) pathname = pathname.slice(0, -1);
      routes.add(pathname);
    } catch {
      // skip malformed
    }
  }
  return [...routes];
}

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) =>
      handler(req, res, { public: DIST, rewrites: [{ source: "**", destination: "/index.html" }] }),
    );
    server.listen(PORT, () => resolve(server));
  });
}

function routeToFilePath(route) {
  if (route === "/") return path.join(DIST, "index.html");
  return path.join(DIST, route.replace(/^\//, ""), "index.html");
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 800 });
    const url = `http://localhost:${PORT}${route}`;
    await page.goto(url, { waitUntil: "networkidle0", timeout: NAV_TIMEOUT });
    // Extra settle for Helmet / async paints
    await new Promise((r) => setTimeout(r, SETTLE_MS));

    // Guard against client-side redirects (e.g. CityPage redirecting unknown
    // slugs to "/"). If the final pathname diverges, skip writing rather than
    // poisoning the target URL with home-page HTML.
    const finalPath = new URL(page.url()).pathname.replace(/\/$/, "") || "/";
    const wanted = route === "/" ? "/" : route.replace(/\/$/, "");
    if (finalPath !== wanted) {
      throw new Error(`redirected to ${finalPath}`);
    }

    // Inject <!--prerendered--> marker so we can spot snapshots quickly
    let html = await page.content();
    html = html.replace(/<head>/, "<head>\n    <!-- prerendered -->");

    const outPath = routeToFilePath(route);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
    return { route, bytes: html.length };
  } finally {
    await page.close();
  }
}

async function main() {
  const routes = await loadRoutesFromSitemap();
  if (routes.length === 0) {
    console.error("[prerender] no routes found in sitemap.xml");
    process.exit(1);
  }
  console.log(`[prerender] ${routes.length} routes`);

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let ok = 0;
  let fail = 0;
  try {
    // Render serially — keeps memory low and order deterministic
    for (const route of routes) {
      try {
        const res = await prerenderRoute(browser, route);
        ok++;
        console.log(`  ✓ ${res.route.padEnd(40)} ${(res.bytes / 1024).toFixed(1)} KB`);
      } catch (err) {
        fail++;
        console.log(`  ✗ ${route} — ${err.message}`);
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`[prerender] done: ${ok} ok, ${fail} failed`);
  if (fail > 0) process.exit(1);
}

main().catch((err) => {
  console.error("[prerender] fatal:", err);
  process.exit(1);
});
