# Previte -- Preact + Vite

Playing around with Preact and Vite.

> This `vite-plugin-pwa` branch uses `vite-plugin-pwa` for the PWA functionality, but still there are some issues for PWA in the development mode.

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
- `dev:start`: Runs the vitejs development server.
- `prod:build`: Deletes the `build/` folder, then formats the files, and finally runs the `vite build` script with production as the node environment.
- `prod:build:serve`: Runs the `prod:build` npm script, and then serves the generated `build/` folder.
