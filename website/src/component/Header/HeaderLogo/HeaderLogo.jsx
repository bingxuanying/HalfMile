import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../Header.sass";

class HeaderLogo extends Component {
  render() {
    return (
      <Navbar.Brand href="#home" exact="true" id="NavLogo">
        <img src="https://img.icons8.com/pastel-glyph/64/000000/travel-signpost.png" />
        Half Mile
      </Navbar.Brand>
    );
  }
}

export default HeaderLogo;
