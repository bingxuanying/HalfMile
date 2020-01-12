import React, { useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HeaderNav/HeaderNav.css";
import "../User/User.sass";
import { Nav, Modal, Container, Row, Image, Col, Figure, text } from "react-bootstrap";

class UserProfileLogo extends Component{
    render(){
        return(
            <Nav>
                <Nav.Link >
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

