import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="transparent" data-bs-theme="dark" sticky="top">
      <Container className='nav-bar-sec'>
        <Navbar.Brand className='fw-bold fs-2 text-warning' href="#home">Backer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='px-3 text-light' href="#home">Home</Nav.Link>
            <Nav.Link className='px-3 text-light' href="#About">About</Nav.Link>
            <Nav.Link className='px-3 text-light' href="#services">Services</Nav.Link>
            <Nav.Link className='px-3 text-light' href="#team">Team</Nav.Link>
            <NavDropdown className='px-3 text-light' title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3 text-light">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='px-3 text-light' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;