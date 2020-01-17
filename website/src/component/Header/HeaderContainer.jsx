import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMid from "./HeaderMid/HeaderMid";
import HeaderNav from "./HeaderNav/HeaderNav";
import "./Header.sass";

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
      <Navbar
        className="bar-container pb-0"
        fixed="top"
        bg={!isTop && "white"}
        expand="lg"
      >
        <HeaderLogo />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <HeaderMid className="middle-bar" />
          <HeaderNav />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderContainer;
