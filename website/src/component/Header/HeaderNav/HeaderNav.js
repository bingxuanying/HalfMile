import React, { Component } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

class HeaderNav extends Component {
  render() {
    return(
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand className="NavLogo"><HeaderLogo />Travel App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="BarInfo">
          <Nav className="mr-auto">
            <Nav.Link href="#Plan" id="Plan">Your Plan</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Home">Home</Nav.Link>           
            <Nav.Link href="#Register">Register</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderNav;
