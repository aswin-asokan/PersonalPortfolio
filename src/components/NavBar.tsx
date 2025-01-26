import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{ backgroundColor: "white", position: "sticky" }}
    >
      <Container>
        <Navbar.Brand href="#">
          <img
            src="/assets/images/Aswin__2_-removebg-preview.png"
            height={35}
            alt="Brand Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={handleNavLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" onClick={handleNavLinkClick}>
              Skills
            </Nav.Link>
            <Nav.Link href="#experience" onClick={handleNavLinkClick}>
              Experience
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavLinkClick}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavLinkClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
