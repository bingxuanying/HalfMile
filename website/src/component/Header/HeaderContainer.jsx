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
      isTop: false
    };
  }

  componentDidMount() {
    // document.addEventListener("scroll", () => {
    //   this.setState({
    //     isTop: window.scrollY < 100
    //   });
    //   // console.log(this.state.isTop);
    // });
  }

  render() {
    // isTop: if true => {color, border-bottom}: white
    //        else false => black
    // transistion: all ease 0.5s
    const { isTop } = this.state;
    return (
      <Navbar
        className="navbar-container navbar-expand-md p-0"
        fixed="top"
        bg={!isTop && "white"}
        expand="lg"
        style={isTop ? { color: "white" } : { color: "black" }}
      >
        <div className="navbar-left-section">
          <HeaderLogo />
          <HeaderMid className="middle-bar" />
        </div>
        <div className="navbar-right-section">
          <div className="navbar-toggle-wrapper">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse>
            <HeaderNav />
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default HeaderContainer;
