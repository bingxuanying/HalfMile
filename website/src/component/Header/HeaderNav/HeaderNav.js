import React, { Component, useState } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import { Navbar, Nav, Container, Row, Image, Col } from "react-bootstrap";
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import datePicker from "../../Calender/Calender";
import UserProfileLogo from "../User/UserLogo";
import NavSign from "../User/NavSign";
import NavLog from "../User/NavLog";

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
      // console.log(this.state.isTop);
    });
  }

  render() {
    // isTop: if true => {color, border-bottom}: white
    //        else false => black
    // transistion: all ease 0.5s
    const { isTop } = this.state;

    return (
      <Nav>
        <NavLog />
        {/* <NavSign /> */}
      </Nav>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.user.isLogin
  };
};

export default connect(mapStateToProps)(HeaderNav);
