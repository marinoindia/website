import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, existsSync } from "fs";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use root as base for custom domain (marinoindia.co.in)
  // GitHub Pages with custom domain serves from root path
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
    }),
    // Plugin to copy index.html to 404.html after build for GitHub Pages routing
    {
      name: "copy-404",
      closeBundle() {
        try {
          const indexPath = path.resolve(__dirname, "dist/index.html");
          const destPath = path.resolve(__dirname, "dist/404.html");
          if (existsSync(indexPath)) {
            copyFileSync(indexPath, destPath);
            console.log("Successfully copied index.html to 404.html");
          } else {
            console.warn("index.html not found in dist, skipping 404.html copy");
          }
        } catch (err) {
          console.warn("Failed to copy index.html to 404.html:", err);
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
