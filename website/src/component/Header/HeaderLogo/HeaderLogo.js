import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class HeaderLogo extends Component {
  render() {
    return (
      <Nav.Link exact="true" href="/">
        <Navbar.Brand className="NavLogo">
          <img src="https://img.icons8.com/pastel-glyph/64/000000/travel-signpost.png" />
          Half Mile
        </Navbar.Brand>
      </Nav.Link>
    );
  }
}

export default HeaderLogo;
