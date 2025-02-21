// Footer.js
import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import "./FooterModule.css";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  const renderTooltip = (props, text) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );
  return (
    <footer>
      <h2 className="mb-3">SAM SUNDAR S T</h2>
      <nav>
        <ul className="titlecard">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
        </ul>
      </nav>
      <div className="social-icons">
       
        <OverlayTrigger
          placement="bottom"
          overlay={(props) => renderTooltip(props, "Email Me")}
        >
          <a className="icon" href="mailto:example@example.com">
            <FaEnvelope />
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={(props) => renderTooltip(props, "LinkedIn")}
        >
          <a className="icon" href="https://www.linkedin.com/in/navaneethankv/">
            <FaLinkedin />
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={(props) => renderTooltip(props, "Instagram")}
        >
          <a className="icon" href="https://www.instagram.com/navaneethankv/">
            <FaInstagram />
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={(props) => renderTooltip(props, "WhatsApp")}
        >
          <a className="icon" href="https://wa.me/1234567890">
            <FaWhatsapp />
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={(props) => renderTooltip(props, "GitHub")}
        >
          <a className="icon" href="https://github.com/navaneethankv">
            <FaGithub />
          </a>
        </OverlayTrigger>
      </div>
      <p>Elevating the Digital Experience!</p>
    </footer>
  );
}

export default Footer;
