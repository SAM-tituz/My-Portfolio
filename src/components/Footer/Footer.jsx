// Footer.js
import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import "./FooterModule.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const renderTooltip = (props, text) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );
  return (
    <footer>
      <h2 className="mb-3">SAM SUNDAR S T </h2>
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
          <a className="icon" target="_blank" href="mailto:samsundar262001@gmail.com">
            <FaEnvelope />
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={(props) => renderTooltip(props, "LinkedIn")}
        >
          <a className="icon" target="_blank" href="https://www.linkedin.com/in/sam-sundar-st/">
            <FaLinkedin />
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={(props) => renderTooltip(props, "Instagram")}
        >
          <a className="icon" target="_blank" href="https://www.instagram.com/samsundar._/">
            <FaInstagram />
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={(props) => renderTooltip(props, "Twitter")}
        >
          <a className="icon" target="_blank" href="https://x.com/SamSundar26">
            <FaXTwitter/>
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={(props) => renderTooltip(props, "GitHub")}
        >
          <a className="icon" target="_blank" href="https://github.com/SAM-tituz">
            <FaGithub />
          </a>
        </OverlayTrigger>
      </div>
      <p>Elevating the Digital Experience!</p>
    </footer>
  );
}

export default Footer;
