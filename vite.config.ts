import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { vercelPreset } from "@vercel/remix/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import { manifest } from "./src/meta/manifest";

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
      appDirectory: "src",
      presets: [vercelPreset],
    }),
    VitePWA({
      manifest: manifest,
      workbox: {
        globPatterns: ["**/*.{js,css,html}"],
      },
    }),
  ],
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
