import { For } from "solid-js"
import { darkMode } from "../../components/Header/Header"
import ProjectItem from "../../components/ProjectItem/ProjectItem"
import "./Projects.scss"

const projects = [
  {
    id: "smash-it",
    name: "Smash It!",
    description:
      "Performance tracking for table tennis. This is a full-stack application developed the performance of table tennis players and compare it against one another. This project was inspired by the competitve nature of table tennis during my web development bootcamp.",
    stack: "React, SASS, Node.js, Express.js, Knex.js, Objection.js, MySQL ",
    alt: "Smash It App",
    url: "https://smash-it.vercel.app",
    github: "https://github.com/Excelsior2021/smash-it",
  },
  {
    id: "pairs",
    name: "Pairs",
    description:
      "An interactive card game. Originally developed as a terminal based game with Python, then as a web application using React and now as a web application using SolidJS. This is one of my favourite projects as it has gone through various iterations. It implements programming logic coupled with a sleek and intuitive UI/UX. There is a multiplayer mode that allows two players to play together with the use of Socket.IO.",
    stack: "SolidJS, SASS, TypeScript, Node.js, Express.js, Socket.IO",
    alt: "Pairs App",
    url: "https://pairs-card-game.vercel.app",
    github: "https://github.com/Excelsior2021/pairs",
  },
  {
    id: "view",
    name: "View Streaming App POC",
    description:
      "A proof of concept for a video streaming web app. A responsive SPA.",
    stack: "React, SASS, TypeScript",
    alt: "View App",
    url: "https://view-web-app-client.vercel.app",
    github: "https://github.com/Excelsior2021/view-web-app-client",
  },
  {
    id: "space-tourism",
    name: "Space Tourism App POC",
    description:
      "A proof of concept for a space torusim app. A responsive SPA with React Router.",
    stack: "React, SASS, TypeScript",
    alt: "Space Tourism App",
    url: "https://space-tourism-poc.vercel.app",
    github: "https://github.com/Excelsior2021/space-tourism",
  },
  {
    id: "ultimate-trivia",
    name: "Ultimate Trivia",
    description:
      "A web application using the Trivia Database API. The app was developed as part of a 24 hour hackathon whilst I was doing a bootcamp in web development. Previously used vanilla Javascript, now using TypeScript with webpack 5.",
    stack: "HTML, SASS, TypeScript, webpack",
    alt: "Ultimate Trivia App",
    url: "https://excelsior2021.github.io/ultimate-trivia",
    github: "https://github.com/Excelsior2021/ultimate-trivia",
  },
  {
    id: "veg-meals",
    name: "VegMeals",
    description:
      "A representation of a food ordering app. An insightful project where I had to make use of forms and send http requests to a back-end api.",
    stack: "React, Firebase",
    alt: "Veg Meals App",
    url: "https://excelsior2021.github.io/veg-meals",
    github: "https://github.com/Excelsior2021/veg-meals",
  },
  {
    id: "calculator",
    name: "Calculator",
    description:
      "My version of a calculator as a web app developed using React. The most challenging part was implementing the logic, which kept me entertained for hours trying to solve. Now uses TypeScript with React",
    stack: "React, TypeScript",
    alt: "Calculator App",
    url: "https://excelsior2021.github.io/calculator",
    github: "https://github.com/Excelsior2021/calculator",
  },
  {
    id: "battleship",
    name: "Battleship",
    description:
      "An adaptation of the classic game Battleship. A project that was a great learning curve for me in developing a front-end application. I had to use relatively complex logic and design the application to be user-friendly. Developed using vanilla HTML, CSS & JavaScript.",
    stack: "HTML, CSS, JavaScript",
    alt: "Battleship App",
    url: "https://excelsior2021.github.io/battleship",
    github: "https://github.com/Excelsior2021/battleship",
  },
  {
    id: "target-practice",
    name: "Target Practice",
    description:
      "A fun game developed in Python with the pygame library. This was one of my first ever applications that I built with Python. A challenging but rewarding project that taught me a lot of implementing logic within an application.",
    stack: "Python",
    alt: "Target Practice Python Game",
    url: "https://github.com/Excelsior2021/target-practice",
    github: "https://github.com/Excelsior2021/target-practice",
  },
]

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
      profile for more projects. All projects use Git for version control unless
      otherwise stated.
    </p>
    <ul className="projects__list">
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
