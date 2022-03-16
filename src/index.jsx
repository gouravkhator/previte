import { render } from "preact";
import { App } from "./pages/App";
import "./styles/main.scss";
import manifestDataUri from "../manifest.pwa";

// the below <App /> JSX syntax requires the filename to be ended with .jsx so that esbuild can work smoothly, without us controlling the build..
render(<App />, document.getElementById("app"));

function registerSW() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => {
        console.log(
          "Service worker registered successfully. Now, this webapp has become a PWA..",
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

function registerManifest() {
  let element = document.createElement("link");
  element.setAttribute("rel", "manifest");
  element.setAttribute("href", manifestDataUri);
  document.querySelector("head").appendChild(element);
}

// registerSW(); // commenting out the service worker code thing for now
registerManifest();
