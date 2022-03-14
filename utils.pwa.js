/**
 * Returns the config for runtime caching of certain files..
 */
export const getRuntimeCacheConfig = ({ name, pattern }) => ({
  urlPattern: pattern,
  handler: "CacheFirst",
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 20,
      maxAgeSeconds: 60 * 60 * 24, // 24 hours
    },
    cacheableResponse: {
      statuses: [200],
    },
  },
});
