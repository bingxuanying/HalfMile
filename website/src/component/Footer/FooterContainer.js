import React, { Component } from "react";
import "./FooterContainer.css";
import FooterButtom from "./FooterButtom/FooterButtom";

class FooterContainer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-container-content"></div>
        <div className="footer-container-footer">
          <FooterButtom />
        </div>
      </div>
    );
  }
}

export default FooterContainer;
