import { A } from "@solidjs/router"
import { darkMode, setDarkMode } from "../Header/Header"
import lightMode from "../../assets/icons/light.svg"
import darkModeImg from "../../assets/icons/dark.svg"
import "./Menu.scss"

const pages = ["bio", "projects", "contact"]

const MenuItem = props => {
  const handleClick = () => {
    pendo.track("navigation click", {
      name: props.page,
      data: "hello world!",
    })
  }

  const serverTrack = async () => {
    const res = await fetch("https://app.pendo.io/data/track", {
      method: "POST",
      "content-type": "application/json",
      mode: "no-cors",
      "x-pendo-integration-key": "0a0cbcf8-1480-42ef-413c-6dbcae0a90e5",
      body: JSON.stringify({
        type: "track",
        event: "serverTrack",
        visitorId: "1000",
        accountId: "1000",
        timestamp: Date.now(),
        context: {},
      }),
    })

    console.log(res)
  }

  return (
    <li class="menu__item" onclick={serverTrack}>
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
      onclick={() => setDarkMode(!darkMode())}>
      <img
        class="menu__theme-toggle"
        src={darkMode() ? lightMode : darkModeImg}
        alt="theme toggle"
      />
    </div>
  </div>
)

export default Menu
