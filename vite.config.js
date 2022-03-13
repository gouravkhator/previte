import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import rimraf from "rimraf";

rimraf.sync(path.join(__dirname, "dev-dist"));

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

// OLD vite config -- playing around

/*
export default defineConfig(({ command, mode }) => {
  const baseConfig = {
    plugins: [preact()],
    build: {
      outDir: "build",
    },
  };

  if (command === "serve") {
    // development mode
    return {
      ...baseConfig,
    };
  } else {
    // production mode
    return {
      ...baseConfig,
    };
  }
});
*/
