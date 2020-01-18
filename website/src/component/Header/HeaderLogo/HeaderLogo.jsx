import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

class HeaderLogo extends Component {
  render() {
    return (
      <Navbar.Brand as={Link} to="/" exact="true" className="nav-logo ">
        <img src="https://img.icons8.com/pastel-glyph/64/000000/travel-signpost.png" />
        Half Mile
      </Navbar.Brand>
    );
  }
}

export default HeaderLogo;
