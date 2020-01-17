import React, { useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.sass";
import { Nav, Figure } from "react-bootstrap";

class UserProfileLogo extends Component {
  render() {
    return (
      <Nav>
        <Nav.Link href="profile">
          <Figure className="user-logo">
            <Figure.Image
              width={50}
              height={20}
              alt="171x180"
              src="https://pbs.twimg.com/profile_images/1197795247335456768/qqmjESKn_bigger.jpg"
              roundedCircle
            />
            <b id="user-text">ZJH</b>
          </Figure>
        </Nav.Link>
      </Nav>
    );
  }
}

export default UserProfileLogo;
