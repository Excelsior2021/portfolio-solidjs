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

const StackItem = props => <li class="landing__stack-item">{props.tech}.</li>

const Landing = () => (
  <div class="landing">
    <div className="landing__container">
      <p class="landing__heading">Hi, my name is Jonathan</p>
      <p class="landing__sub-heading">I'm a web developer</p>
      <ul class="landing__stack">
        <For each={stack}>{tech => <StackItem tech={tech} />}</For>
      </ul>
    </div>
  </div>
)

export default Landing
