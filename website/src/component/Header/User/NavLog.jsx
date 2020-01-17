import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Image, Col } from "react-bootstrap";
import UserProfileLogo from "../User/UserLogo";

class NavLog extends Component {
  render() {
    return (
      <Nav>
        <Nav.Link exact="true" href="/" className="nav-link">
          <div
            className="nav-btn"
            id="home-button"
            size="lg"
            variant="outline-dark"
          >
            Home
          </div>
        </Nav.Link>
        <Nav.Link href="help">
          <div className="nav-btn" size="lg" variant="outline-dark">
            Help
          </div>
        </Nav.Link>
        <UserProfileLogo />
      </Nav>
    );
  }
}

export default NavLog;
