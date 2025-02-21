import "./NavbarModule.css";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" fixed="top" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle
              variant="outline"
              className="navbtn"
              id="dropdown-basic"
            >
              Connect
            </Dropdown.Toggle>

            <Dropdown.Menu className="navbtnmenu">
              <Dropdown.Item href="https://www.linkedin.com/in/sam-sundar-st/" target="blank">Linkedin</Dropdown.Item>
              <Dropdown.Item href="https://github.com/SAM-tituz"target="blank">Github</Dropdown.Item>
              <Dropdown.Item href="https://x.com/SamSundar26"target="blank">X(twiter)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
