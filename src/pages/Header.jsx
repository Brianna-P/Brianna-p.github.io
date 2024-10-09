import React from "react";
import logo from '../assets/B.png';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{
          backgroundColor: "#fad8cb",
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 90px', // Make the navbar skinnier
          fontFamily: '"Helvetica Neue", Arial, sans-serif', // Modern font
        }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="OU Logo" style={{ height: "50px"}} /> {/* Logo on the left */}
        </div>
        <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}> {/* Aligns nav items to the right */}
          <li className="nav-item">
            <a className="nav-link" href="/#" style={{ color: "#2f4f4f", fontWeight: '500' }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/contact" style={{ color: "#2f4f4f", fontWeight: '500' }}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/portfolio" style={{ color: "#2f4f4f", fontWeight: '500' }}>
              Portfolio & Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
