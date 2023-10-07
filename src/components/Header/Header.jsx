import { createSignal, createEffect } from "solid-js"
import { A } from "@solidjs/router"
import Menu from "../Menu/Menu"
import menu from "../../assets/icons/menu.svg"
import menuClose from "../../assets/icons/menu-close.svg"
import lightMode from "../../assets/icons/light.svg"
import darkModeImg from "../../assets/icons/dark.svg"
import "./Header.scss"

const [menuOpen, setMenuOpen] = createSignal(false)
export const [darkMode, setDarkMode] = createSignal(false)

createEffect(() => {
  const darkModeSetting = localStorage.getItem("darkMode")
  if (darkModeSetting === "true") {
    setDarkMode(true)
  }
})

createEffect(() => {
  if (darkMode()) {
    document.body.classList.add("dark-theme")
    localStorage.setItem("darkMode", JSON.stringify(true))
  } else {
    document.body.classList.remove("dark-theme")
    localStorage.removeItem("darkMode")
  }
})

const Header = () => (
  <header class={darkMode() ? "header header--dark-mode" : "header"}>
    <div class="header__container">
      <A href="/" class="header__logo-link">
        <span class="header__logo" onclick={() => setMenuOpen(false)}>
          Jonathan Kila
        </span>
      </A>

      <nav class="nav">
        <div class="nav__icon-container">
          <img
            class={darkMode() ? "nav__icon nav__icon--dark-mode" : "nav__icon"}
            src={menuOpen() ? menuClose : menu}
            alt="menu"
            onclick={() => setMenuOpen(!menuOpen())}
          />
        </div>
        <div class="nav__menu--desktop">
          <Menu closeModal={() => setMenuOpen(false)} />
        </div>
        <div
          class="header__theme-toggle-container"
          onclick={() => setDarkMode(!darkMode())}>
          <img
            class="header__theme-toggle"
            src={darkMode() ? lightMode : darkModeImg}
            alt="theme toggle"
          />
        </div>
      </nav>
    </div>
    <nav class="nav__menu--mobile">
      <Show when={menuOpen()} fallback={null}>
        <Menu closeModal={() => setMenuOpen(false)} />
      </Show>
    </nav>
  </header>
)

export default Header
