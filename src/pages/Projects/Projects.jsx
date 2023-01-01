import { For } from "solid-js"
import { darkMode } from "../../components/Header/Header"
import projectImages from "../../assets/project_images/project_images"
import ProjectItem from "../../components/ProjectItem/ProjectItem"
import "./Projects.scss"

const projects = [
  {
    id: "smash-it",
    name: "Smash It!",
    description:
      "Performance traking for table tennis. This is a full-stack application developed to track users performance in table tennis and compare it against one another. This project was inspired by the competitve nature of table tennis during my web development bootcamp.",
    stack: "React, SASS, Node, Express.js, Knex.js, Objection.js, MySQL ",
    img: projectImages.smashItImg,
    alt: "Smash It App",
    url: "https://smash-it.vercel.app/",
  },
  {
    id: "pairs",
    name: "Pairs",
    description:
      "An interactive card game. Originally developed as a terminal based game with Python, then as a web application using React and now as a web application using SolidJS. This is one of my favourite projects as it has gone through various iterations, from Python to JavaScript with SolidJS. It implements programming logic coupled with a sleek and intuitive UI/UX.",
    stack: "SolidJS, TypeScript, SASS",
    img: projectImages.pairsImg,
    alt: "Pairs App",
    url: "https://pairs-card-game.vercel.app",
  },
  {
    id: "ultimate-trivia",
    name: "Ultimate Trivia",
    description:
      "A web application using the Trivia Database API. The app was developed as part of a 24 hour hackathon whilst I was doing a bootcamp in web development. Previously used vanila Javascript, now using TypeScript with webpack 5.",
    stack: "HTML, SASS, TypeScript, webpack",
    img: projectImages.triviaImg,
    alt: "Ultimate Trivia App",
    url: "https://excelsior2021.github.io/ultimate-trivia/",
  },
  {
    id: "typescript-counter-todos",
    name: "TypeScript Counter & Todos",
    description:
      "This is my first TypeScript application. After learning the basics of TypeScript, I was eager to use what I had learnt to build a relatively simple app.",
    stack: "HTML, SASS, TypeScript",
    img: projectImages.typescriptCounterTodosImg,
    alt: "TypeScript Counter & Todos App",
    url: "https://excelsior2021.github.io/TypeScript-counter-todos/",
  },
  {
    id: "veg-meals",
    name: "VegMeals",
    description:
      "A representation of a food ordering app. An insightful project where I had to make use of forms and send http requests to a back-end api.",
    stack: "React, Firebase",
    img: projectImages.vegMealsImg,
    alt: "Veg Meals App",
    url: "https://excelsior2021.github.io/veg-meals/",
  },
  {
    id: "battleship",
    name: "Battleship",
    description:
      "An adaptation of the classic game Battleship. A project that was a great learning curve for me in developing a front-end application. I had to use relatively complex logic and design the application to be user-friendly. Developed using vanila HTML, CSS & JavaScript.",
    stack: "HTML, CSS, JavaScript",
    img: projectImages.battleshipImg,
    alt: "Battleship App",
    url: "https://excelsior2021.github.io/battleship",
  },
  {
    id: "google-homepage",
    name: "Google Homepage",
    description:
      "A clone of Google's homepage. This project taught me how to develop an application with responsive design. I am very proud of the results.",
    stack: "HTML, CSS",
    img: projectImages.googleHomepageImg,
    alt: "Google Homepage Clone",
    url: "https://excelsior2021.github.io/google_homepage",
  },
  {
    id: "calculator",
    name: "Calculator",
    description:
      "My version of a calculator as a web app developed using React. The most challenging part was implementing the logic, which kept me entertained for hours trying to solve. Now uses TypeScript with React",
    stack: "React, TypeScript",
    img: projectImages.calculatorImg,
    alt: "Calculator App",
    url: "https://excelsior2021.github.io/calculator",
  },
  {
    id: "target-practice",
    name: "Target Practice",
    description:
      "A fun game developed in Python with the pygame library. This was one of my first ever applications that I built with Python. A challenging but rewarding project that taught me a lot of implementing logic within an application.",
    stack: "Python",
    img: projectImages.targetPracticeImg,
    alt: "Target Practice Python Game",
    url: "https://github.com/Excelsior2021/target-practice",
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
            img={project.img}
            stack={project.stack}
            url={project.url}
            alt={project.alt}
          />
        )}
      </For>
    </ul>
  </div>
)

export default Projects
