module.exports = {
  globDirectory: "./build/",
  globPatterns: ["**/*.{html,js,svg,css}"],
  clientsClaim: true,
  cleanupOutdatedCaches: true,
  swDest: "./build/sw.js",
  skipWaiting: true,
  // runtimeCaching: [
  //   {
  //     urlPattern: /images/,
  //     handler: "cacheFirst",
  //     options: {
  //       cacheName: "images",
  //       cacheExpiration: { maxEntries: 20 },
  //     },
  //   },
  // ],
};

// OLD workbox config -- playing around

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
