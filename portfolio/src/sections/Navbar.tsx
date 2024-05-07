import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./css/navbar.css"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand className="text-white" href="/#home">David Zamir</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/#projects">Projects</Nav.Link>
            <Nav.Link className="text-white" href="/#about">About me</Nav.Link>
            <Nav.Link className="text-white" href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;