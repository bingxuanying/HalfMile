import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HeaderNav/HeaderNav.css";
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import { FaMailBulk, FaEnvelope, FaLock } from "react-icons/fa";

function SignUp() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Nav.Link href="#Login">
                <a id="Help-buttom" size="lg" variant="outline-dark" onClick={handleShow}>
                    SignUp
                </a>
            </Nav.Link>
            <Modal show={show} onHide={handleClose} size="small" centered>
                <Modal.Header closeButton>
                    <div className="title">SignUp</div>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className = "signup-modal">
                        <div className="input-container">
                            <FaEnvelope id="email-icon"/>
                            <input type="email" 
                                placeholder="Email Address" 
                                pattern=".+@signup.com" 
                                size="30" required
                                title="Please provide a valid e-mail address"
                            ></input>
                            
                        </div>
                        <div className="input-container">
                            <FaLock id="password-icon" />
                            <input type="password" placeholder="Password"></input>
                            <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                        </div>
                        <div className="input-container">
                            <FaLock id="password-icon" />
                            <input type="password" placeholder="Confirm password"></input>
                            <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                        </div>
                        <div className="button-container">
                            
                            <button className="submit-button" type="submit">SignUp</button>
                        </div>
                        
                    </div>          
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SignUp;