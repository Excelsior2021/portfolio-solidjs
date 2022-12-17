/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./App";
import "./styles/partials/_globals.scss";

render(
  () => (
    <Router base="/">
      <App />
    </Router>
  ),
  document.getElementById("root")
);
