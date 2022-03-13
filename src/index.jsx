import { render } from "preact";
import { App } from "./pages/App";
import "./styles/main.scss";
import manifestDataUri from "../manifest.pwa";
import { registerServiceWorker } from "../register-sw.pwa";

// the below <App /> JSX syntax requires the filename to be ended with .jsx so that esbuild can work smoothly, without us controlling the build..
render(<App />, document.getElementById("app"));

function registerManifest() {
  let element = document.createElement("link");
  element.setAttribute("rel", "manifest");
  element.setAttribute("href", manifestDataUri);
  document.querySelector("head").appendChild(element);
}

if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  /*
  we are registering the vite plugin generated service worker, only in production,
  as the development build is spitting the service worker in different folder, 
  and it is causing some issues to get working.. 
  */
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => {
      console.log(
        "Service worker registered successfully. Now, this webapp has become a PWA..",
      );
    })
    .catch((err) => {
      console.error(err);
    });
}

// registerServiceWorker(); // service worker registering part with workbox virtual register, which does not work as needed.
// registerManifest(); // my custom manifest
