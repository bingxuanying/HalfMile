import React, { Component } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderNav.css";
import { Navbar, Nav} from "react-bootstrap";
import Login from "../User/Login";

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
          AnyWhere
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbar">
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
            <Nav.Link href="#Register">
              <a id="Help-buttom" size="lg" variant="outline-dark">
                SignUp
              </a>
            </Nav.Link>
            <Nav.Link href="#Login">
              <a id="Help-buttom" size="lg" variant="outline-dark">
                Login
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderNav;
