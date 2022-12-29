import { darkMode } from "../../components/Header/Header"
import githubIcon from "../../assets/contact_icons/github.svg"
import linkedinIcon from "../../assets/contact_icons/linkedin.svg"
import mailIcon from "../../assets/contact_icons/mail.svg"
import "./Contact.scss"

const Contact = () => (
  <div class="contact">
    <div class="contact__icons">
      <a
        className="contact__icons-link"
        href="https://github.com/Excelsior2021"
        target="_blank"
        rel="noreferrer">
        <img
          className={
            darkMode()
              ? "contact__icons-img contact__icons-img--dark-mode"
              : "contact__icons-img"
          }
          alt="github"
          src={githubIcon}
        />
      </a>
      <a
        className="contact__icons-link"
        href="https://www.linkedin.com/in/jonathan-kila"
        target="_blank"
        rel="noreferrer">
        <img
          className={
            darkMode()
              ? "contact__icons-img contact__icons-img--dark-mode"
              : "contact__icons-img"
          }
          alt="linkedIn"
          src={linkedinIcon}
        />
      </a>
      <a className="contact__icons-link" href="mailto: temidee11@yahoo.co.uk">
        <img
          className={
            darkMode()
              ? "contact__icons-img contact__icons-img--dark-mode"
              : "contact__icons-img"
          }
          alt="email"
          src={mailIcon}
        />
      </a>
    </div>
  </div>
)

export default Contact
