import React, { Component } from "react";
import HeaderNavbar from "./HeaderNav/HeaderNav";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import "./Header.css";

class HeaderContainer extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-logo"></div>
        <div className="header-info"></div>
        <div className="header-nav"></div>
      </div>
    );
  }
}

export default HeaderContainer;
