import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Figure } from "react-bootstrap";

class UserProfileLogo extends Component {
  render() {
    return (
      <Nav>
        <Nav.Link as={Link} to="/profile" className="nav-link">
          <Figure className="user-logo-box ml-3 mr-3 mb-0">
            <Figure.Image
              className="user-logo m-0"
              alt="171x180"
              src="https://pbs.twimg.com/profile_images/1197795247335456768/qqmjESKn_bigger.jpg"
              roundedCircle
            />
            <b className="user-text">ZJH</b>
          </Figure>
        </Nav.Link>
      </Nav>
    );
  }
}

export default UserProfileLogo;
