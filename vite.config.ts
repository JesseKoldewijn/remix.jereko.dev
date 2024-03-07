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
      injectRegister: null,
      registerType: "autoUpdate",
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ["*/*.*", "*.*"],

        // Issue: https://github.com/vite-pwa/vite-plugin-pwa/issues/120
        // Don't fallback on document based (e.g. `/some-page`) requests
        // Even though this says `null` by default, setting this specifically to `null` to make it work
        navigateFallback: null,
      },
    }),
  ],
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
