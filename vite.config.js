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
    manifest: false,
  },
  plugins: [
    preact(),
    VitePWA({
      manifest: {
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

// Some options we explored before..

/*
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
const swURL =
  process.env.NODE_ENV === "production"
    ? path.join(__dirname, "build", "sw.js")
    : path.join(__dirname, "sw.js");

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "src/assets", // to allow direct route for all assets like /favicon.svg as is..
  plugins: [
    preact(),
    VitePWA({
      // using this approach, to let the plugin generate manifest for us..
      manifest: {
        icons: [
          {
            src: "/favicon.svg",
            type: "image/svg+xml",
            sizes: "512x512",
          },
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      includeAssets: ["robots.txt"],
      strategies: "generateSW",
      registerType: mode === "production" ? "prompt" : "autoUpdate",
      devOptions: {
        enabled: mode !== "production",
      },
      mode: mode,
      base: "/",
      srcDir: "src",
      filename: "sw.js",
      workbox: {
        swDest: swURL,
        clientsClaim: true,
        skipWaiting: true,
      },
    }),
  ],
  build: {
    outDir: "build",
  },
});
*/
