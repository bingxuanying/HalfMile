import React, { Component } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, DropdownButton, NavItem, MenuItem} from 'react-bootstrap';
import { icon } from "@fortawesome/fontawesome-svg-core";
// import AddProductModal from "../UserLogin/AddProductModal";

class HeaderNav extends Component {
  render() {
    return(
      <Navbar fixed="top" bg="white" expand="lg" className="Nav-Bar">
        <Navbar.Brand className="NavLogo"><HeaderLogo />AnyWhere</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="BarInfo">
          <Nav className="mr-auto" />           
          <Nav>
            <Nav.Link href="#Home"><Button id="home-buttom" size="lg" variant="outline-dark">Home</Button></Nav.Link>           
            <Nav.Link href="#Help"><Button id="Help-buttom" size="lg" variant="outline-dark">Help</Button></Nav.Link>           
            <Nav.Link href="#Register"><Button size="lg" variant="outline-dark">Register</Button></Nav.Link>
            <Nav.Link href="#Login"><Button size="lg" variant="outline-dark">Login</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderNav;
