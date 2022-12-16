import { A } from "@solidjs/router";
import "./Menu.scss";

const pages = ["bio", "projects", "contact"];

const MenuItem = props => (
  <li class="menu-modal__item">
    <A
      href={`/${props.page}`}
      class="menu-modal__link"
      onclick={props.closeModal}
    >
      {props.page}
    </A>
  </li>
);

const Menu = props => (
  <div class="menu-modal" onclick={props.closeModal}>
    <ul class="menu-modal__list">
      <For each={pages}>
        {page => <MenuItem page={page} closeModal={props.closeModal} />}
      </For>
    </ul>
  </div>
);

export default Menu;
