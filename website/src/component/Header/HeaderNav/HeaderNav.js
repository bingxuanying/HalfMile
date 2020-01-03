import React, { Component, useState } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderNav.css";
import { Navbar, Nav, Modal} from "react-bootstrap";
import Login from "../User/Login";
import SignUp from "../User/SignUp";

class HeaderNav extends Component {
  constructor() {
    super();

    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      this.setState({
        isTop: window.scrollY < 100
      });
      console.log(this.state.isTop);
    });
  }

  render() {
    // isTop: if true => {color, border-bottom}: white
    //        else false => black
    // transistion: all ease 0.5s
    const { isTop } = this.state;

    return (
      <Navbar id="Bar" fixed="top" bg={!isTop && "white"} expand="lg">
        <Navbar.Brand className="NavLogo">
          <HeaderLogo />
          Half Mile
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navbar">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="#Home">
              <a id="Help-buttom" size="lg" variant="outline-dark">
                Home
              </a>
            </Nav.Link>
            <Nav.Link href="#Help">
              <a id="Help-buttom" size="lg" variant="outline-dark">
                Help
              </a>
            </Nav.Link>
            <SignUp />
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderNav;
