import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMid from "./HeaderMid/HeaderMid";
import HeaderNav from "./HeaderNav/HeaderNav";
import "./Header.css";

class HeaderContainer extends Component {
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
      // console.log(this.state.isTop);
    });
  }
  render() {
    // isTop: if true => {color, border-bottom}: white
    //        else false => black
    // transistion: all ease 0.5s
    const { isTop } = this.state;

    return (
      <Navbar id="Bar" fixed="top" bg={!isTop && "white"} expand="lg">
        <HeaderLogo />
        <HeaderMid />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />      
        <Navbar.Collapse className="navbar">         
          <HeaderNav />
        </Navbar.Collapse>
        
      </Navbar>
    );
  }
}

export default HeaderContainer;
