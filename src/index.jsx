import { render } from "preact";
import { App } from "./pages/App";
import "./styles/main.scss";
import manifestDataUri from "../manifest.pwa";
import { registerSW } from "virtual:pwa-register";

// the below <App /> JSX syntax requires the filename to be ended with .jsx so that esbuild can work smoothly, without us controlling the build..
render(<App />, document.getElementById("app"));

function registerManifest() {
  let element = document.createElement("link");
  element.setAttribute("rel", "manifest");
  element.setAttribute("href", manifestDataUri);
  document.querySelector("head").appendChild(element);
}

if ("serviceWorker" in navigator) {
  registerSW(); // default vite-plugin-pwa modules' code to register the service worker
}

// registerManifest(); // my custom manifest, which is not used, as vite-plugin-pwa spits its own manifest..
