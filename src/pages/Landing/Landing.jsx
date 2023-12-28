import { For } from "solid-js"
import "./Landing.scss"

const stack = [
  "React",
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Jest",
  "Node.js",
  "Python",
  "Git",
  "SolidJS",
]

const Landing = () => (
  <div class="landing">
    <div class="landing__container">
      <p data-test="landing_heading" class="landing__heading">
        Hi, my name is Jonathan
      </p>
      <p data-test="landing_sub-heading" class="landing__sub-heading">
        I'm a web developer
      </p>
      <ul data-test="landing_stack" class="landing__stack">
        <For each={stack}>
          {tech => <li class="landing__stack-item">{tech}.</li>}
        </For>
      </ul>
    </div>
  </div>
)

export default Landing
