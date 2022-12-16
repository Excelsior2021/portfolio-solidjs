import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import Menu from "../Menu/Menu";
import menu from "../../assets/icons/menu.png";
import menuClose from "../../assets/icons/menu-close.png";
import "./Nav.scss";

const [menuOpen, setMenuOpen] = createSignal(false);

const Nav = () => (
  <>
    <header class="header">
      <div class="nav">
        <div className="nav__logo" onclick={() => setMenuOpen(false)}>
          <A href="/" class="nav__logo-link">
            Jonathan Kila
          </A>
        </div>
        <div class="nav__icon-container">
          <img
            src={menuOpen() ? menuClose : menu}
            alt="menu"
            class="nav__icon"
            onclick={() => setMenuOpen(!menuOpen())}
          />
        </div>
      </div>
      <Show when={menuOpen()} fallback={null}>
        <Menu closeModal={() => setMenuOpen(false)} />
      </Show>
    </header>
  </>
);

export default Nav;
