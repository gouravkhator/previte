## Some notes for Developers, for this template

## Vite with Preact and PWA enabled

- When loading env variables in ViteJS, refer [this](https://vitejs.dev/guide/env-and-mode.html) docs. Also, if I change something in `.env` files, then I have to restart the Vite server for the environment variables to be loaded smoothly.

## Security Points

- In commit #[0efb1ca...](https://github.com/gouravkhator/previte/commit/0efb1caeac8568c5e58d7d3bcbc5168b38b634c6), we saw a major security flaw.

    - By default, Vite or Preact-CLI or React-CLI gives the env prefix like `"VITE_"`, just so that, those build systems can differentiate between which environment variables to expose to client, and which not to. 
    
    - Internal Exposing of the variables occurs by using webpack define plugin or rollup replace plugin in the client side code, and replacing each `process.env.<KEY>` with the respective values.
    
    - But, if we have some differently named environment variable, then they won't load those variables in the `process.env` object.

    - If we try to do that by ourselves like the trick done internally, by replacing each `process.env.<KEY>` with the values, then the values even gets compiled to build folder, which is served to client and they can inspect our app's files easily from the browser.

    - Even, an attacker can get all important words of dictionary-type attack, from our app's files content in plain-text format.

    - This is harmful for sensitive content. So, we recommend the tips told in [this Medium article](https://medium.com/swlh/keeping-env-variables-private-in-react-app-fa44a9b33c31).
    
    - > **Either save the sensitive env in some server, and then for every data, our client side needs, we will call the respective api to the server, who will fetch the details and return that to the client end..**
