import headshot from "../../assets/images/headshot.jpg"
import "./Bio.scss"

const Bio = () => (
  <div class="bio">
    <div class="bio__headshot">
      <img class="bio__img" src={headshot} alt="jonathan kila" />
    </div>
    <h2 class="bio__heading">Developing the world one app at a time!</h2>

    <div class="bio__text-container">
      <p class="bio__text">
        I love technology. I love solving problems. I believe that tech is the
        main way we'll solve problems in the future. From personal problems to
        global problems and beyond. I want to contribute to solving these
        problems.
      </p>

      <p class="bio__text">
        I am a self-taught developer, whose passion for solving problems through
        computer programming grows from strength to strength as I continue to
        learn and develop.
      </p>

      <p class="bio__text">
        I enjoy learning independently but I also embarked on a web development
        bootcamp to enhance my skills and pick up new ones. Also, to fill in any
        gaps, learn best practices and collaborate with other developers to
        enable me to be industry ready.
      </p>

      <h3 class="bio__text bio__text--remark">
        This portfolio was developed with SolidJS
      </h3>
    </div>

    <a
      href="https://www.codewars.com/users/excelsior2021"
      target="_blank"
      rel="noreferrer"
      class="bio__link">
      <div class="bio__codewars">
        <label class="bio__codewars-label">Codewars</label>
        <img
          src="https://www.codewars.com/users/excelsior2021/badges/large"
          alt="codewars badge"
          class="bio__codewars-img"
        />
      </div>
    </a>
  </div>
)

export default Bio
