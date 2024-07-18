import React from "react";

function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Welcome to my Webpage!</h1>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark" style={{
          backgroundColor: "#016463",
        }}>
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                Portfolio & Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
