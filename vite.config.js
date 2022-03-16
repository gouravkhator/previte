import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { config as dotenvConfig } from "dotenv";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // call dotenv and it will return an Object with a parsed key
  let env = null;

  // checks if the process.env.DB_PASSWORD is present, then we can use process.env (maybe the environment is from the hosted Heroku/Netlify/some other CMS)
  /**
   * Why we didn't do the checking with `mode` of ViteJS, and then set env accordingly as per the 'development' or 'production' mode?
   * >> It is bcoz, from 'vite build' also, we get a production environment. So, we have to use dotenv there also on our local machine.
   */
  env = process.env.DB_PASSWORD
    ? process.env
    : dotenvConfig({
        path: "./.env.local",
      }).parsed;

  // reduce the env to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    publicDir: "src/assets", // adds all the files in the `src/assets` to the `build/` root.
    plugins: [
      preact(),
      replace({ ...envKeys }), // rollup replace, replacing all process.env.<KEY> with the respective values
    ],
    build: {
      outDir: "build",
    },
    envPrefix: "APP_", // env starting with this prefix will be exposed to the client build bundle and also will be available in import.meta.env
  };
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
