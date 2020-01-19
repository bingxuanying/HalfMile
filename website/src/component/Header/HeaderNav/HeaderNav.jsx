import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import UserProfileLogo from "./UserLogo";
import { connect } from "react-redux";

class HeaderNav extends Component {
  render() {
    return (
      <Nav className="navbar-right">
        <Nav.Link as={Link} exact="true" to="/" className="nav-link">
          <div className="nav-btn" size="lg" variant="outline-dark">
            Home
          </div>
        </Nav.Link>
        {/* <Nav.Link as={Link} to="/help">
          <div className="nav-btn" size="lg" variant="outline-dark">
            Help
          </div>
        </Nav.Link> */}

        {!this.props.isLogin && <SignUp />}
        {!this.props.isLogin && <Login />}
        {this.props.isLogin && <UserProfileLogo />}
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
