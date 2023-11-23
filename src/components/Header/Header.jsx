import { createSignal, createEffect } from "solid-js"
import { A } from "@solidjs/router"
import Menu from "../Menu/Menu"
import "./Header.scss"

export const [darkMode, setDarkMode] = createSignal(false)

const Header = () => {
  const [menuOpen, setMenuOpen] = createSignal(false)

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

  const handleMenuOpen = menuOpen => {
    const body = document.getElementById("body")
    if (menuOpen) body.classList.remove("body--menu-open")
    else body.classList.add("body--menu-open")
    setMenuOpen(!menuOpen)
  }

  return (
    <header
      class={
        menuOpen()
          ? darkMode()
            ? "header header--menu-open header--dark-mode"
            : "header header--menu-open"
          : darkMode()
          ? "header header--dark-mode"
          : "header"
      }>
      <div class="header__container">
        <A href="/" class="header__logo-link">
          <span class="header__logo" onclick={() => setMenuOpen(false)}>
            Jonathan Kila
          </span>
        </A>

        <nav class="nav">
          <div class="nav__icon-container">
            <img
              class={
                darkMode() ? "nav__icon nav__icon--dark-mode" : "nav__icon"
              }
              src={
                menuOpen()
                  ? "./assets/icons/menu-close.svg"
                  : "./assets/icons/menu.svg"
              }
              alt="menu"
              onclick={() => handleMenuOpen(menuOpen())}
            />
          </div>
          <div class="nav__menu--desktop">
            <Menu closeModal={() => handleMenuOpen(true)} />
          </div>
          <div
            class="header__theme-toggle-container"
            onclick={() => setDarkMode(!darkMode())}>
            <img
              class="header__theme-toggle"
              src={
                darkMode()
                  ? "./assets/icons/light.svg"
                  : "./assets/icons/dark.svg"
              }
              alt="theme toggle"
            />
          </div>
        </nav>
      </div>
      <nav class="nav__menu--mobile">
        <Show when={menuOpen()}>
          <Menu closeModal={() => handleMenuOpen(true)} />
        </Show>
      </nav>
    </header>
  )
}

export default Header
