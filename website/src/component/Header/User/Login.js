import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HeaderNav/HeaderNav.css";
import "../User/User.sass";
import {Nav, Modal, Container, Row} from "react-bootstrap";
import {FaUser, FaLock } from "react-icons/fa";

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link href="#Login">
        <div
          className="nav-sign"
          size="lg"
          variant="outline-dark"
          onClick={handleShow}
        >
          Login
        </div>
      </Nav.Link>
      {/* Modal Method */}
      <Modal show={show} onHide={handleClose} size="small" centered>
        <Modal.Header closeButton />
        <Modal.Body className="modal-body">
          <div className="login-modal">
            <div className="input-container">
              <FaUser id="user-icon" />
              <input type="text" placeholder="Username"></input>
            </div>
            <div className="input-container">
              <FaLock id="password-icon" />
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              ></input>
            </div>
            <div className="button-container">
              <button className="submit-button" type="submit">
                Login
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
