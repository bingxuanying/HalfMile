import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class HeaderLogo extends Component {
  render() {
    return (
      <Navbar.Brand className="NavLogo">
        <Nav.Link exact href="/">
          <a>
            <img src="https://img.icons8.com/pastel-glyph/64/000000/travel-signpost.png" />
            Half Mile
          </a>
        </Nav.Link>
      </Navbar.Brand>
    );
  }
}

export default HeaderLogo;
