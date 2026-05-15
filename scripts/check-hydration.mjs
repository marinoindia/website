#!/usr/bin/env node
// One-shot check: serve dist/, load key routes via puppeteer, capture
// console warnings/errors so we can spot hydration mismatches before merging.

import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "serve-handler";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const PORT = 39825;

const ROUTES = [
  "/",
  "/products",
  "/product/wire-rope-slings",
  "/variant/2-leg-wire-rope-sling",
  "/suppliers/mumbai",
  "/suppliers/jamshedpur",
  "/premade-slings",
  "/contact",
  "/our-people",
];

const server = createServer((req, res) =>
  handler(req, res, { public: DIST, rewrites: [{ source: "**", destination: "/index.html" }] }),
);
await new Promise((r) => server.listen(PORT, r));

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const summary = [];

for (const route of ROUTES) {
  const page = await browser.newPage();
  const msgs = [];
  const pageErrors = [];

  page.on("console", (msg) => {
    const type = msg.type();
    if (type === "warning" || type === "error") {
      msgs.push({ type, text: msg.text() });
    }
  });
  page.on("pageerror", (err) => pageErrors.push(err.message));

  try {
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: "networkidle0",
      timeout: 30_000,
    });
    await new Promise((r) => setTimeout(r, 800));

    const hydrationIssues = msgs.filter((m) =>
      /hydrat|did not match|Text content does not match|Warning: Expected server HTML|Minified React error #(418|423|425|421|419|422)/i.test(
        m.text,
      ),
    );
    summary.push({
      route,
      hydrationIssues: hydrationIssues.length,
      otherWarnings: msgs.length - hydrationIssues.length,
      pageErrors: pageErrors.length,
      sample: [...hydrationIssues, ...pageErrors.map((e) => ({ type: "pageerror", text: e }))].slice(
        0,
        3,
      ),
    });
  } catch (err) {
    summary.push({ route, fatal: err.message });
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

console.log("\nRoute                                     hydration  warn  errs");
console.log("─".repeat(72));
for (const s of summary) {
  if (s.fatal) {
    console.log(`${s.route.padEnd(40)} FATAL: ${s.fatal}`);
    continue;
  }
  console.log(
    `${s.route.padEnd(40)}  ${String(s.hydrationIssues).padStart(8)}  ${String(s.otherWarnings).padStart(4)}  ${String(s.pageErrors).padStart(4)}`,
  );
  for (const item of s.sample) {
    console.log(`    [${item.type}] ${item.text.slice(0, 160)}`);
  }
}

const totalH = summary.reduce((n, s) => n + (s.hydrationIssues ?? 0), 0);
const totalE = summary.reduce((n, s) => n + (s.pageErrors ?? 0), 0);
console.log(
  `\nTotal: ${totalH} hydration issue(s), ${totalE} page error(s), across ${summary.length} routes`,
);
process.exit(totalH > 0 || totalE > 0 ? 1 : 0);
