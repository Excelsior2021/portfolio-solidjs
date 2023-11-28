import { For } from "solid-js"
import { darkMode } from "../../App"
import ProjectItem from "../../components/ProjectItem/ProjectItem"
import projects from "../../store/projects"
import "./Projects.scss"

const Projects = () => (
  <div class="projects">
    <p class="projects__text">
      Not an exhuastive list. Please check out my{" "}
      <a
        class={
          darkMode()
            ? "projects__text-link projects__text-link--dark-mode"
            : "projects__text-link"
        }
        href="https://github.com/Excelsior2021"
        target="_blank"
        rel="noreferrer">
        GitHub
      </a>{" "}
      profile for more projects.
    </p>
    <ul class="projects__list">
      <For each={projects}>
        {project => (
          <ProjectItem
            name={project.name}
            description={project.description}
            img={`./assets/project_images/${project.id}.png`}
            stack={project.stack}
            url={project.url}
            alt={project.alt}
            github={project.github}
          />
        )}
      </For>
    </ul>
  </div>
)

export default Projects
