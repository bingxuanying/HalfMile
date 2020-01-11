import React, { useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HeaderNav/HeaderNav.css";
import "../User/User.sass";
import { Nav, Modal, Container, Row, Image, Col } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";

class UserProfileLogo extends Component{
    render(){
        return(
            <Nav>
                <Nav.Link>
                    <Container>
                        <Row>
                            <Col xs={2} md={2}>
                                <Image src="https://pbs.twimg.com/profile_images/1197795247335456768/qqmjESKn_bigger.jpg" roundedCircle />
                            </Col>
                        </Row>
                    </Container>
                </Nav.Link>
            </Nav>
        );
    }
}

export default UserProfileLogo;

