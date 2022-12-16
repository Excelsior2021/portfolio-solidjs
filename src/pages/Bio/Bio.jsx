import headshot from "../../assets/images/headshot.jpg";
import "./Bio.scss";

const Bio = () => (
  <div class="bio">
    <div className="bio__headshot">
      <img className="bio__img" src={headshot} alt="jonathan kila" />
    </div>
    <h2 className="bio__heading">Developing the world one app at a time!</h2>

    <p className="bio__text">
      I love technology. I love solving problems. I believe that tech is the
      main way we'll solve problems in the future. From personal problems to
      global problems and beyond. I want to contribute to solving these
      problems.
    </p>

    <p className="bio__text">
      I am a self-taught developer, whose passion for solving problems through
      computer programming grows from strength to strength as I continue to
      learn and develop.
    </p>

    <p className="bio__text">
      I have enough motivation to keep learning solo but I also embarked on a
      web development bootcamp to enhance my skills and pick up new ones. Also,
      to fill in any gaps, learn best practices and collaborate with other
      developers to enable me to be industry ready.
    </p>

    <p>
      I also love to travel ✈️. I'm a wannabe muscian 🎹. I love to keep fit 🤸🏾‍♂️.
      I'm a wannabe polyglot. 💬
    </p>

    <a
      href="https://www.codewars.com/users/excelsior2021"
      target="_blank"
      rel="noreferrer"
      className="bio__link"
    >
      <div className="bio__codewars">
        <label className="bio__codewars-label">Codewars</label>
        <img
          src="https://www.codewars.com/users/excelsior2021/badges/large"
          alt="codewars badge"
          className="bio__codewars-img"
        />
      </div>
    </a>
  </div>
);

export default Bio;
