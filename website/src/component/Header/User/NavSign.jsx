import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Image, Col } from "react-bootstrap";
import Login from "../User/Login";
import SignUp from "../User/SignUp";

class NavSign extends Component {
  render() {
    return (
      <Nav>
        <Nav.Link exact="true" href="/" className="nav-link">
          <div
            className="nav-sign"
            id="home-button"
            size="lg"
            variant="outline-dark"
          >
            Home
          </div>
        </Nav.Link>
        <Nav.Link href="help">
          <div className="nav-sign" size="lg" variant="outline-dark">
            Help
          </div>
        </Nav.Link>
        <SignUp />
        <Login />
      </Nav>
    );
  }
}

export default NavSign;
