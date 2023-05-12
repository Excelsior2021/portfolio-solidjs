import { darkMode } from "../../components/Header/Header"
import githubIcon from "../../assets/contact_icons/github.svg"
import linkedinIcon from "../../assets/contact_icons/linkedin.svg"
import mailIcon from "../../assets/contact_icons/mail.svg"
import "./Contact.scss"

const contacts = [
  {
    link: "https://github.com/Excelsior2021",
    img: githubIcon,
    ariaLabel: "jonathan kila github profile",
  },
  {
    link: "https://www.linkedin.com/in/jonathan-kila",
    img: linkedinIcon,
    ariaLabel: "jonathan kila linkedin profile",
  },
  {
    link: "mailto: jonathan.kila10@gmail.com",
    img: mailIcon,
    ariaLabel: "email jonathan kila",
  },
]

const Contact = () => (
  <div class="contact">
    <div class="contact__icons">
      {contacts.map(({ link, img, ariaLabel }) => (
        <a
          className="contact__icons-link"
          href={link}
          target="_blank"
          rel="noreferrer">
          <img
            className={
              darkMode()
                ? "contact__icons-img contact__icons-img--dark-mode"
                : "contact__icons-img"
            }
            alt="github"
            src={img}
            aria-label={ariaLabel}
          />
        </a>
      ))}
    </div>
  </div>
)

export default Contact
