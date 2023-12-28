import { createSignal } from "solid-js"
import { A } from "@solidjs/router"
import Menu from "../Menu/Menu"
import { darkMode, setDarkMode } from "../../App"
import "./Header.scss"

const Header = () => {
  const [menuOpen, setMenuOpen] = createSignal(false)

  const handleMenuOpen = menuOpen => {
    const body = document.querySelector("body")
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
          <div
            class="nav__icon-container"
            onclick={() => handleMenuOpen(menuOpen())}>
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
            />
          </div>
          <Menu
            displayMenu={menuOpen()}
            closeModal={() => handleMenuOpen(true)}
          />
          <div
            class={
              menuOpen()
                ? "header__theme-toggle-container header__theme-toggle-container--display"
                : "header__theme-toggle-container"
            }
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
    </header>
  )
}

export default Header
