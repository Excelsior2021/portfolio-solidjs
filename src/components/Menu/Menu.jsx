import { A } from "@solidjs/router";
import "./Menu.scss";

const pages = ["bio", "projects", "contact"];

const MenuItem = props => (
  <li class="menu__item">
    <A
      href={`/${props.page}`}
      class="menu__link"
      onclick={props.closeModal}
      activeClass="menu__link--active"
    >
      {props.page}
    </A>
  </li>
);

const Menu = props => (
  <div class="menu" onclick={props.closeModal}>
    <ul class="menu__list">
      <For each={pages}>
        {page => <MenuItem page={page} closeModal={props.closeModal} />}
      </For>
    </ul>
  </div>
);

export default Menu;
