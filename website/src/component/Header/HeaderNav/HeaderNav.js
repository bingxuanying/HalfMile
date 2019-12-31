import React, { Component } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
// import AddProductModal from "../UserLogin/AddProductModal";

class HeaderNav extends Component {
  render() {
    return(
      <Navbar fixed="top" bg="white" expand="lg" className="Nav-Bar">
        <Navbar.Brand className="NavLogo"><HeaderLogo />AnyWhere</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="BarInfo">
          <Nav className="mr-auto">
            <NavDropdown title="Travel Everywhere">
              <NavDropdown.Item href="#Plan" id="Plan">Your Plan</NavDropdown.Item>
              <NavDropdown.Item href="#Hotel" id="Hotel">Your Hotel</NavDropdown.Item>
              <NavDropdown.Item href="#Flight" id="Flight">Your Flight</NavDropdown.Item>
            </NavDropdown>
            
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
