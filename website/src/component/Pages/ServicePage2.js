import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import HeaderContainer from "../Header/HeaderContainer";
import "./ServicePage.css";

class ServicePage extends Component {
  render() {
    return (
      <div className="servicepage-containter">
        <HeaderContainer />
        <div
          style={{ height: "80px", width: "100%", backgroundColor: "white" }}
        ></div>
        <div className="servicepage-sidebar">
          <div className="servicepage-sidebar-searchbar"></div>
          <div className="servicepage-sidebar-menu"></div>
        </div>
        <div className="servicepage-floatWindow"></div>
        <button className="servicepage-pre-btn page-btn-bg" type="button">
          <FontAwesomeIcon className="page-btn" icon={faCaretLeft} />
        </button>
        <button className="servicepage-next-btn page-btn-bg">
          <FontAwesomeIcon className="page-btn" icon={faCaretRight} />
        </button>
      </div>
    );
  }
}

export default ServicePage;
