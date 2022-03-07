import { render } from "preact";
import { App } from "./pages/App";
import "./public/main.scss";

// the below <App /> JSX syntax requires the filename to be ended with .jsx so that esbuild can work smoothly, without us controlling the build..
render(<App />, document.getElementById("app"));
