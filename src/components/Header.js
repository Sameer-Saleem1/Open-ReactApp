import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" className="Navbar-bg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto Navbar-section">
            <Link className="Navbar-element  text-white" to="/HeroSection">
              <h4>HeroSection</h4>
            </Link>
            <Link className="Navbar-element  text-white" to="/Contact">
              <Button variant="primary" className="m-2">
                Contact
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
