import { ManifestOptions } from "vite-plugin-pwa";

export const manifest: Partial<ManifestOptions> = {
  short_name: "Remix Jereko",
  name: "Remix - Jereko",
  icons: [
    {
      src: "/meta/icons/manifest-icon-192.maskable.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/meta/icons/manifest-icon-192.maskable.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "maskable",
    },
    {
      src: "/meta/icons/manifest-icon-512.maskable.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/meta/icons/manifest-icon-512.maskable.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
  start_url: "/",
  background_color: "#212121",
  display: "standalone",
  scope: "/",
  theme_color: "#212121",
};
