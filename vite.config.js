import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { VitePWA } from "vite-plugin-pwa";
import { getRuntimeCacheConfig } from "./utils.pwa";

/**
 * URLs for the icons and other stuffs..
 */
const urls = {
  favicon: "/favicon.svg",
  smallerIcon: "/android-chrome-192x192.png",
  largerIcon: "/android-chrome-512x512.png",
};

export default defineConfig({
  publicDir: "src/assets", // add all the files in this mentioned directory, to `build/` folder..
  build: {
    outDir: "build",
  },
  plugins: [
    preact(),
    VitePWA({
      manifest: {
        short_name: "Previte",
        name: "Previte: Get Set with Vite-al Preact!",
        background_color: "#3367D6",
        display: "standalone",
        theme_color: "#3367D6",
        description: "Template for building PWA with Preact and ViteJS",
        icons: [
          {
            src: urls.favicon,
            type: "image/svg+xml",
            sizes: "512x512",
          },
          {
            src: urls.smallerIcon,
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: urls.largerIcon,
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: urls.largerIcon,
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        /*
        this skipWaiting option is turned off, because we need to show update button to user once the service worker is activated..
        Updated Service worker does not get activated on page reload, but only gets activated on tab close and then reopen..
        */

        // skipWaiting: true,
        runtimeCaching: [
          getRuntimeCacheConfig({
            // any image in the '*/images' route, will be saved to cache name 'images'
            // it does not include any image in '/assets' folder, as the pattern does not match
            pattern: /\/images\/.*\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i,
            name: "images",
          }),
        ],
      },
    }),
  ],
});
