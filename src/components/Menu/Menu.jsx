import { A } from "@solidjs/router"
import { darkMode, setDarkMode } from "../Header/Header"
import "./Menu.scss"

const pages = ["bio", "projects", "contact"]

const MenuItem = props => {
  return (
    <li class="menu__item">
      <A
        href={`/${props.page}`}
        class="menu__link"
        onclick={props.closeModal}
        activeClass="menu__link--active">
        {props.page}
      </A>
    </li>
  )
}

const Menu = props => (
  <div class="menu" onclick={props.closeModal}>
    <ul class={darkMode() ? "menu__list menu__list--dark-mode" : "menu__list"}>
      <For each={pages}>
        {page => <MenuItem page={page} closeModal={props.closeModal} />}
      </For>
    </ul>
    <div
      class="menu__theme-toggle-container"
      onclick={e => {
        e.stopPropagation()
        setDarkMode(!darkMode())
      }}>
      <img
        class="menu__theme-toggle"
        src={
          darkMode() ? "./assets/icons/light.svg" : "./assets/icons/dark.svg"
        }
        alt="theme toggle"
      />
    </div>
  </div>
)

export default Menu
