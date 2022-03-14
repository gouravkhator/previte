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

  // below is the commented code to show the update button when the new update comes
  // this will activate the latest service worker.

  /*
   const updateSW = registerSW({
    onNeedRefresh() {
      Toastify({
        text: `<h4 style='display: inline'>An update is available!</h4>
               <br><br>
               <a class='do-sw-update'>Click to update and reload</a>  `,
        escapeMarkup: false,
        gravity: "bottom",
        onClick() {
          updateSW(true);
        }
      }).showToast();
    }
  });
  */
}

// registerManifest(); // my custom manifest, which is not used, as vite-plugin-pwa spits its own manifest..
