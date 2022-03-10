import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
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
