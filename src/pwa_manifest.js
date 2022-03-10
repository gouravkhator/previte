import favicon from "./assets/favicon.svg";
import smallerViteIcon from "./assets/vite-icon-192x192.png";
import largerViteIcon from "./assets/vite-icon-512x512.png";

const baseUrl = window.location.origin; // the origin -- protocol + hostname + port

/**
 * The manifest JS Object -- It will be converted to Data URI as a better replacement
 *
 * This way, we can build manifest dynamically,
 * as we know that the src/href for icons will change by the ViteJS build tooling..
 */
const manifest = {
  short_name: "Previte",
  name: "Previte: Get Set with Vite-al Preact!",
  icons: [
    {
      src: baseUrl + favicon,
      type: "image/svg+xml",
      sizes: "512x512",
    },
    {
      src: baseUrl + smallerViteIcon,
      type: "image/png",
      sizes: "192x192",
    },
    {
      src: baseUrl + largerViteIcon,
      type: "image/png",
      sizes: "512x512",
    },
  ],
  start_url: baseUrl + "/index.html",
  background_color: "#3367D6",
  display: "standalone",
  scope: baseUrl,
  theme_color: "#3367D6",
  description: "Template for building PWA with Preact and ViteJS",
};

const content = encodeURIComponent(JSON.stringify(manifest));

/**
 * The Manifest Data URI -- A better replacement for manifest.json file
 *
 * We can either have manifest.json file in html, but that will be another file to be downloaded client side,
 * so we use data URI to inject manifest..
 */
const manifestDataUri = "data:application/manifest+json," + content;

export default manifestDataUri;
