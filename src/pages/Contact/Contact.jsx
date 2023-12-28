import { darkMode } from "../../App"
import "./Contact.scss"

const contacts = [
  {
    link: "https://github.com/Excelsior2021",
    img: "./assets/contact_icons/github.svg",
    alt: "github",
    ariaLabel: "jonathan kila github profile",
  },
  {
    link: "https://www.linkedin.com/in/jonathan-kila",
    img: "./assets/contact_icons/linkedin.svg",
    alt: "linkedin",
    ariaLabel: "jonathan kila linkedin profile",
  },
  {
    link: "mailto: jonathan.kila10@gmail.com",
    img: "./assets/contact_icons/mail.svg",
    alt: "email",
    ariaLabel: "email jonathan kila",
  },
]

const Contact = () => (
  <div class="contact">
    <div class="contact__icons">
      {contacts.map(({ link, img, alt, ariaLabel }) => (
        <a
          class="contact__icons-link"
          href={link}
          target="_blank"
          rel="noreferrer">
          <img
            class={
              darkMode()
                ? "contact__icons-img contact__icons-img--dark-mode"
                : "contact__icons-img"
            }
            alt={alt}
            src={img}
            aria-label={ariaLabel}
          />
        </a>
      ))}
    </div>
  </div>
)

export default Contact
