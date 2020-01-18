import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Image, Col } from "react-bootstrap";
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import UserProfileLogo from "./UserLogo";
import { connect } from "react-redux";

class HeaderNav extends Component {
  render() {
    return (
      <Nav className="navbar-right">
        <Nav.Link exact="true" href="/" className="nav-link">
          <div className="nav-btn" size="lg" variant="outline-dark">
            Home
          </div>
        </Nav.Link>
        <Nav.Link href="help">
          <div className="nav-btn" size="lg" variant="outline-dark">
            Help
          </div>
        </Nav.Link>
        <Login />
        <SignUp />
        <UserProfileLogo />
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
