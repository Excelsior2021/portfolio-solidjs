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
      "Content-Type": "application/json",
      "x-pendo-integration-key": "b1407d95-851a-44ca-6e83-453f0f857aaa.us",
      body: JSON.stringify({
        type: "track",
        event: "serverTrack",
        visitorId: "",
        accountId: "",
        timestamp: Date.now(),
        context: {},
      }),
    })

    console.log(await res.json())
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
