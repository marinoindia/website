import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, existsSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use /website/ as base for GitHub Pages URL (marinoindia.github.io/website/)
  // Custom domain (marinoindia.co.in) will also work with proper DNS configuration
  base: "/website/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
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
