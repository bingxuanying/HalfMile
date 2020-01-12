import React, { useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HeaderNav/HeaderNav.css";
import "../User/User.sass";
import { Nav, Modal, Container, Row, Image, Col, Figure } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";

class UserProfileLogo extends Component{
    render(){
        return(
            <Nav>
                <Nav.Link>
                    {/* <Figure id="user-logo">
                        <Figure.Image
                            width={20}
                            height={20}
                            alt="171x180"
                            src="https://pbs.twimg.com/profile_images/1197795247335456768/qqmjESKn_bigger.jpg"
                        />
                    </Figure> */}
                </Nav.Link>
            </Nav>
        );
    }
}

export default UserProfileLogo;
