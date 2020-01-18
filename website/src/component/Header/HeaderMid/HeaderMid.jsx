import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

class HeaderMid extends Component {
  render() {
    return <Nav.Link as={Link} to="/plan" className="navbar-middle"></Nav.Link>;
  }
}

export default HeaderMid;
