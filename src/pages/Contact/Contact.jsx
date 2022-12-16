import githubIcon from "../../assets/contact_icons/icons8-github-120.png";
import linkedinIcon from "../../assets/contact_icons/icons8-linkedin-128.png";
import mailIcon from "../../assets/contact_icons/icons8-mail-100.png";

import "./Contact.scss";

const Contact = () => (
  <div class="contact">
    <div class="contact__icons">
      <a
        className="contact__icons-link"
        href="https://github.com/Excelsior2021"
        target="_blank"
        rel="noreferrer"
      >
        <img className="contact__icons-img" alt="github" src={githubIcon} />
      </a>
      <a
        className="contact__icons-link"
        href="https://www.linkedin.com/in/jonathan-kila"
        target="_blank"
        rel="noreferrer"
      >
        <img className="contact__icons-img" alt="linkedIn" src={linkedinIcon} />
      </a>
      <a className="contact__icons-link" href="mailto: temidee11@yahoo.co.uk">
        <img className="contact__icons-img" alt="email" src={mailIcon} />
      </a>
    </div>
  </div>
);

export default Contact;
