import React, { Component, useState } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import { Navbar, Nav, Container, Row, Image, Col } from "react-bootstrap";
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import datePicker from "../../Calender/Calender";
import UserProfileLogo from "../User/UserLogo";
import NavSign from "../User/NavSign";
import NavLog from "../User/NavLog";
import { connect } from "react-redux";

class HeaderNav extends Component {

  render() {
    return (
      <Nav>
        {/* <NavLog /> */}
        <NavSign />
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
