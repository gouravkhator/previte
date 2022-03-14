/**
 * Just a note for caching in workbox:
 *
 * Precaching means it will cache on the main workbox-precache browser cache api. We do precaching for critical files, and this normally does not have expiration dates.
 * Runtime caching means it will be cached on our own custom cache. It has some expiration too.
 * We don't want to cache the runtime cache items forever.
 */
module.exports = {
  globDirectory: "./build/",
  /**
   * globPatterns are for checking which files will be precached against the mentioned globDirectory folder..
   * these patterns are the glob primer patterns, which we type in .gitignore too.
   *
   * Here, I am precaching all html, js and css files in every directory and sub-directory in the build/ folder.
   * I am also precaching the svg, ico and png files which are present only in the `build/` folder.
   */
  globPatterns: ["**/*.{html,js,css}", "*.{svg,ico,png}"],
  clientsClaim: true,
  cleanupOutdatedCaches: true,
  swDest: "./build/sw.js",
  // skipWaiting: true, // show the update button to the user somehow..
  runtimeCaching: [
    {
      /**
       * Runtime caching for all the requests with url path: /images/<all image formats>
       */
      urlPattern: /\/images\/.*\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 },
      },
    },
  ],
};

// OLD workbox config -- playing around, for workbox to work in both the modes

// const baseWorkboxConfig = {
//   globPatterns: ["**/*.{html,js,svg,css}"],
//   clientsClaim: true,
//   cleanupOutdatedCaches: true,
//   // runtimeCaching: [
//   //   {
//   //     urlPattern: /images/,
//   //     handler: "cacheFirst",
//   //     options: {
//   //       cacheName: "images",
//   //       cacheExpiration: { maxEntries: 20 },
//   //     },
//   //   },
//   // ],
// };

// const devWorkboxConfig = {
//   ...baseWorkboxConfig,
//   mode: "development",
//   globDirectory: "src/",
//   swDest: "./sw.js",
//   skipWaiting: true,
// };

// const prodWorkboxConfig = {
//   ...baseWorkboxConfig,
//   mode: "production",
//   globDirectory: "./build/",
//   swDest: "./sw.js",
// };

// let workboxConfig = { ...devWorkboxConfig }; // dev mode by default

// if (process.env.NODE_ENV === "production") {
//   workboxConfig = { ...prodWorkboxConfig };
// }

// // module.exports = workboxConfig;
// module.exports = {
//   globDirectory: "src/",
//   swDest: "./sw.js",
//   globPatterns: ["**/*.{html,js,svg,css}"],
// };
