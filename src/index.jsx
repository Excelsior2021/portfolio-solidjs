/* @refresh reload */
import { render } from "solid-js/web"
import { Router } from "@solidjs/router"
import App from "./App"
import "./partials/_globals.scss"

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
)
