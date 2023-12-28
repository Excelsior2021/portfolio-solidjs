import "./Bio.scss"

const Bio = () => (
  <div class="bio">
    <div class="bio__headshot">
      <img
        class="bio__img"
        src="./assets/images/headshot.jpg"
        alt="jonathan kila"
      />
    </div>
    {/* <h2 class="bio__heading">Developing the world one app at a time!</h2> */}

    <div class="bio__text-container">
      <p class="bio__text">
        I love technology and solving problems. Tech is the main way we'll solve
        problems in the future. I want to contribute to solving these problems.
      </p>

      <p class="bio__text">
        I am a developer, whose passion for solving problems through programming
        grows from strength to strength as I continue to learn and develop.
      </p>
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
