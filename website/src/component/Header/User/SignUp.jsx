import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.sass";
import { Nav, Modal } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import * as stateActions from "../../../actions/stateActions";
import * as userActions from "../../../actions/userActions";

function SignUp() {
  const registerInfo = useSelector(state => state.state.registerInfo);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link>
        <div
          className="nav-btn"
          size="lg"
          variant="outline-dark"
          onClick={handleShow}
        >
          SignUp
        </div>
      </Nav.Link>
      <Modal show={show} onHide={handleClose} size="small" centered>
        <Modal.Header closeButton id="modal-header">
          <div id="header-signup">Sign Up</div>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="signup-modal">
            <div className="input-container">
              <FaEnvelope id="email-icon" />
              <input
                id="register-email"
                type="email"
                placeholder="Email Address"
                // pattern=".+@signup.com"
                size="30"
                title="Please provide a valid e-mail address"
                onChange={e =>
                  dispatch(stateActions.updateRegisterEmail(e.target.value))
                }
              />
            </div>

            <div className="password-container">
              <FaLock id="password-icon" />
              <input
                id="register-password"
                type="password"
                placeholder="Password"
                onChange={e =>
                  dispatch(stateActions.updateRegisterPassword(e.target.value))
                }
              />
              <i className="zmdi zmdi-account zmdi-hc-lg"></i>
            </div>

            <div className="password-container">
              <FaLock id="password-icon" />
              <input
                id="register-repassword"
                type="password"
                placeholder="Confirm password"
                // onChange={e =>
                //   dispatch(
                //     stateActions.updateRegisterRePassword(e.target.value)
                //   )
                // }
              />
              <i className="zmdi zmdi-account zmdi-hc-lg"></i>
            </div>
            <div id="checkbox-account">
              {/* <a href="#" id="check-account">
                Already have an account?
              </a> */}
            </div>
            <div className="button-container">
              <button
                className="submit-button"
                type="button"
                onClick={() => {
                  document.getElementById("register-email").value = "";
                  document.getElementById("register-password").value = "";
                  document.getElementById("register-repassword").value = "";
                  dispatch(userActions.sendRegisterInfo(registerInfo));
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer id="modal-footer">
          <a href="#" id="facebookIcon" />
          <a href="#" id="twitterIcon" />
          <a href="#" id="googleIcon" />
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default SignUp;
