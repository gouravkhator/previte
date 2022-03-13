# Previte -- Preact + Vite

Playing around with Preact and Vite.

## Current Problems for PWA functionality

- Development mode registration of service worker, is hard to be implemented with `workbox` or `vite-plugin-pwa`, as I researched a lot through the options and official docs.
- Precaching of important files, even in production mode is not working now. 

**Final Resolution for above problems**

Make a normal **service worker from scratch**, instead of `workbox` or `vite-plugin-pwa`, as that will provide full control and customization.

## Checklist

- [x] Sass Support
- [x] Prettier config
- [ ] Husky + Lint-staged for linting before committing changes to the remote repo.
- [x] Service workers and PWA support
- [ ] [Legacy browser support](https://vitejs.dev/guide/build.html)
- [ ] Environment variables and files
- [ ] Github CI/CD

## Features on Hold

- [ ] Make this repo a template creator for preact and vite, with some cli controls..
- [ ] Add testing to it

## Some NPM Scripts

> Note: For prettier scripts, the files mentioned in the `.prettierignore` are ignored by default.

- `check-format`: Checks the formatting, as per the prettier config `.prettierrc` file. 
- `format`: Formats the files in-place, as per the prettier config `.prettierrc` file.
- `sw`: Runs the generate service worker script of the `workbox-cli`, following the `workbox.config.js` config file.
- `dev:start`: Runs the vitejs development server.
- `dev`: Runs the `dev:start` and `sw` concurrently, to have both the development servers running, with clear concurrent logs.
- `prod:build`: Deletes the `build/` folder, then runs the `vite build` script with production as the node environment. It then runs the `sw` npm script.
- `prod:build:serve`: Runs the `prod:build` npm script, and then serves the generated `build/` folder.
