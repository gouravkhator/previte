import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "src/assets", // adds all the files in the `src/assets` to the `build/` root.
  plugins: [preact()],
  build: {
    outDir: "build",
  },
});

// OLD vite config -- playing around, for vite to work in both dev and prod modes

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
