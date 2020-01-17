import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../User/User.sass";
import { Nav, Modal, Container, Row } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import * as stateActions from "../../../actions/stateActions";
import * as userActions from "../../../actions/userActions";

function Login() {
  const loginInfo = useSelector(state => state.state.loginInfo);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link>
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
        <Modal.Header closeButton id="modal-header">
          <div id="header-login">Welcome Back</div>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="login-modal">
            <div className="input-container">
              <FaUser id="user-icon" />
              <input
                id="login-email"
                type="text"
                placeholder="Email"
                onChange={e =>
                  dispatch(stateActions.updateLoginEmail(e.target.value))
                }
              />
            </div>
            <div className="password-container">
              <FaLock id="password-icon" />
              <input
                id="login-password"
                type="password"
                placeholder="Password"
                autoComplete="on"
                onChange={e =>
                  dispatch(stateActions.updateLoginPassword(e.target.value))
                }
              />
            </div>
            <div id="checkbox">
              <input type="checkbox" id="check"/>
              <lable id="checktext">Remember me</lable><a href='#' id="reset-pw">forgot password?</a>
            </div>
            <div className="button-container">
              <button
                className="submit-button"
                type="submit"
                onClick={() => {
                  document.getElementById("login-email").value = "";
                  document.getElementById("login-password").value = "";
                  dispatch(userActions.fetchUserToken(loginInfo));
                }}
              >
                Login
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer id="modal-footer">
          <a href="#" id="facebookIcon" />
          <a href="#" id="twitterIcon" />
          <a href="#" id="googleIcon" />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
