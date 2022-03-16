# Previte -- Preact + Vite

Playing around with Preact and Vite.

> This is the `main` git branch, for custom service worker code from scratch, without using `workbox` or `vite-plugin-pwa`..

**Note: Code using `workbox` is in the git branch `using-workbox`, and the code using `vite-plugin-pwa` is in the git branch `vite-plugin-pwa`**

Also note that there are some issues in both of the mentioned branches, making it hard for me to set up Service worker in the development mode.

That is why, I would be making the service worker from scratch, with full control on it.

## Checklist

- [ ] Secure Env to have some different strategy rather than server involvement.
- [x] Sass Support
- [x] Prettier config
- [ ] Husky + Lint-staged for linting before committing changes to the remote repo.
- [ ] Service workers and PWA support
- [ ] Precaching and Runtime Caching in the service worker, with offline support.
- [ ] Make PWA possible in dev mode too.
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
