import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import Menu from "../Menu/Menu";
import menu from "../../assets/icons/menu.png";
import menuClose from "../../assets/icons/menu-close.png";
import "./Header.scss";

const [menuOpen, setMenuOpen] = createSignal(false);

const Header = () => (
  <>
    <header class="header">
      <nav class="nav">
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
        <div className="nav__menu--desktop">
          <Menu closeModal={() => setMenuOpen(false)} />
        </div>
      </nav>
      <nav className="nav__menu--mobile">
        <Show when={menuOpen()} fallback={null}>
          <Menu closeModal={() => setMenuOpen(false)} />
        </Show>
      </nav>
    </header>
  </>
);

export default Header;
