import React, { Component, useState } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import { Navbar, Nav, Container, Row, Image, Col } from "react-bootstrap";
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import UserProfileLogo from "../User/UserLogo";
import NavSign from "../User/NavSign";

class NavLog extends Component {
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
                <Nav.Link exact="true" href="/" className="nav-link">
                    <div className="nav-btn" id="home-button" size="lg" variant="outline-dark">
                        Home
                    </div>
                </Nav.Link>
                <Nav.Link href="help">
                    <div className="nav-btn" size="lg" variant="outline-dark">
                        Help
                    </div>

                </Nav.Link>
                <UserProfileLogo />
            </Nav>
        );
    }
}

export default NavLog;
