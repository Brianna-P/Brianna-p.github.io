import React from "react";
import logo from '../assets/B.png';
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Import the necessary Bootstrap components

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: "#fad8cb" }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="OU Logo" style={{ height: "50px" }} />
        </div>
        <Navbar.Toggle aria-controls="ms-auto basic-navbar-nav" />
        <Navbar.Collapse id=" basic-navbar-nav">
          <Nav className="ms-auto" >
            <div className="d-lg-none" align="end"> 
                <NavDropdown.Item href="/#">Home</NavDropdown.Item>
                <NavDropdown.Item href="/#/contact">Contact</NavDropdown.Item>
                <NavDropdown.Item href="/#/portfolio">Portfolio & Resume</NavDropdown.Item>
            </div>
            <div className="d-none d-lg-flex" style={{ gap: '10px' }}> 
              <Nav.Link href="/#" style={{ color: "#2f4f4f", fontWeight: '500' }}>Home</Nav.Link>
              <Nav.Link href="/#/contact" style={{ color: "#2f4f4f", fontWeight: '500' }}>Contact</Nav.Link>
              <Nav.Link href="/#/portfolio" style={{ color: "#2f4f4f", fontWeight: '500' }}>Portfolio & Resume</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
