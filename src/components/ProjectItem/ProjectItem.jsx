import { createSignal } from "solid-js"
import { darkMode } from "../Header/Header"
import "./ProjectItem.scss"

const ProjectItem = props => {
  const [cardOpen, setCardOpen] = createSignal(false)
  const [isLoading, setIsLoading] = createSignal(true)

  return (
    <li class="project-item">
      <div
        class={
          darkMode()
            ? `project project--dark-mode ${isLoading() ? "project--flip" : ""}`
            : `project ${isLoading() ? "project--flip" : ""}`
        }
        onmouseover={() => setIsLoading(false)}
        onfocus={() => setIsLoading(false)}>
        <div class="project__head">
          <h2 class="project__name project__name--mobile">
            <a
              class="project__link"
              href={props.url}
              target="_blank"
              rel="noreferrer">
              {props.name}
            </a>
          </h2>
          <img
            class="project__card-arrow"
            src={
              cardOpen()
                ? "./assets/icons/arrow-up.png"
                : "./assets/icons/arrow-down.png"
            }
            alt="open/close project card"
            width="50px"
            onclick={() => setCardOpen(!cardOpen())}
          />
        </div>

        <div
          class={
            cardOpen()
              ? "project__body project__body--desktop"
              : "project__body project__body--close project__body--desktop"
          }>
          <div class="project__image-container">
            <a href={props.url} target="_blank" rel="noreferrer">
              <img
                class="project__image"
                src={props.img}
                alt={props.alt}
                role="project image and link to project site"
              />
            </a>
          </div>
          <h2 class="project__name project__name--desktop">
            <a
              class="project__link"
              href={props.url}
              target="_blank"
              rel="noreferrer">
              {props.name}
            </a>
          </h2>
          <div class="project__description">
            <p>{props.description}</p>
          </div>
          <a class="project__github-link" href={props.github} target="_blank">
            <img
              class={
                darkMode()
                  ? "project__github project__github--dark-mode"
                  : "project__github"
              }
              src="./assets/contact_icons/github.svg"
              alt="github"
            />
          </a>
          <div class="project__stack">
            <p>{props.stack}</p>{" "}
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProjectItem
