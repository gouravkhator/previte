// we can import below icons as /icon_file_name as we registered the publicDir option in Vite
import favicon from "./src/assets/favicon.svg";
import smallerViteIcon from "./src/assets/android-chrome-192x192.png";
import largerViteIcon from "./src/assets/android-chrome-512x512.png";

const baseUrl = window.location.origin; // the origin -- protocol + hostname + port

/**
 * Returns full url for the assets
 *
 * Full URL is calculated as: origin + asset_url_provided
 * @param asset_url Always should be prefixed with '/'
 */
function getURL(asset_url) {
  return baseUrl + asset_url;
}

/**
 * The manifest JS Object -- It will be converted to Data URI as a better replacement
 *
 * This way, we can build manifest dynamically,
 * as we know that the src/href for icons will change by the ViteJS build tooling..
 */
export const manifest = {
  short_name: "Previte",
  name: "Previte: Get Set with Vite-al Preact!",
  icons: [
    {
      src: getURL(favicon),
      type: "image/svg+xml",
      sizes: "512x512",
    },
    {
      src: getURL(smallerViteIcon),
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: getURL(largerViteIcon),
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: getURL(largerViteIcon),
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
  start_url: getURL("/index.html"),
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
