import React, { Component } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Nav,
  DropdownButton,
  NavItem,
  MenuItem
} from "react-bootstrap";
import Login from "../User/Login";
// import AddProductModal from "../UserLogin/AddProductModal";

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
      <Navbar fixed="top" bg={!isTop && "white"} expand="lg">
        <Navbar.Brand className="NavLogo">
          <HeaderLogo />
          AnyWhere
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="BarInfo">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="#Home">
              <Button id="home-buttom" size="lg" variant="outline-dark">
                Home
              </Button>
            </Nav.Link>
            <Nav.Link href="#Help">
              <Button id="Help-buttom" size="lg" variant="outline-dark">
                Help
              </Button>
            </Nav.Link>
            <Nav.Link href="#Register">
              <Button size="lg" variant="outline-dark">
                Register
              </Button>
            </Nav.Link>
            <Nav.Link href="#Login">
              <Button size="lg" variant="outline-dark">
                Login
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderNav;
