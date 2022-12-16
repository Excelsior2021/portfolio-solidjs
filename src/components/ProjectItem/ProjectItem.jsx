import { createSignal } from "solid-js";
import arrowDown from "../../assets/icons/arrow-down.png";
import arrowUp from "../../assets/icons/arrow-up.png";
import "./ProjectItem.scss";

const ProjectItem = props => {
  const [cardOpen, setCardOpen] = createSignal(false);

  return (
    <li class="project">
      <div class="project__head">
        <h2 class="project__name">
          <a
            class="project__link"
            href={props.url}
            target="_blank"
            rel="noreferrer"
          >
            {props.name}
          </a>
        </h2>
        <div class="project__toggle">
          <img
            class="project__card-arrow"
            src={cardOpen() ? arrowUp : arrowDown}
            alt="open/close project card"
            width="50px"
            onclick={() => setCardOpen(!cardOpen())}
          />
        </div>
      </div>
      <div class={cardOpen() ? "project__body" : "project__body--close"}>
        <div className="project__image-container">
          <a href={props.url} target="_blank" rel="noreferrer">
            <img class="project__image" src={props.img} alt={props.alt} />
          </a>
        </div>
        <div className="project__description">
          <p>{props.description}</p>
        </div>
        <div className="project__stack">
          <p>stack: {props.stack}</p>{" "}
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
