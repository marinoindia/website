import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use root as the base so the app works correctly at https://marinoindia.co.in/
  // GitHub Pages with a custom domain serves from the root path.
  base: "/",
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
          copyFileSync(path.resolve(__dirname, "dist/index.html"), path.resolve(__dirname, "dist/404.html"));
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
