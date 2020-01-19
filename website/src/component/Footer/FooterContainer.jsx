import React, { Component } from "react";
import FooterColumn from "./FooterColumn/FooterColumn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import "./FooterContainer.sass";

class FooterContainer extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    const AboutUs = [
      "Careers",
      "News",
      "Policies",
      "Diversity",
      "Accessibility"
    ];

    const Discover = [
      "Trust & Safety",
      "Invite Friends",
      "Gift Cards",
      "Business Travel"
    ];

    const Help = [
      "FAQ",
      "Privacy policy",
      "Cookie policy",
      "Copyright policy",
      "Terms of use"
    ];

    const Support = ["Contact Us", "Help"];

    return (
      <div className="footer-container">
        <div className="footer-container-content">
          <FooterColumn header={"About us"} content={AboutUs} />
          <FooterColumn header={"Discover"} content={Discover} />
          <FooterColumn header={"Help"} content={Help} />
          <FooterColumn header={"Support"} content={Support} />
        </div>
        <div className="footer-container-bottom">
          <div className="footer-container-bottom-left">
            <FontAwesomeIcon icon={faSuitcase} size="lg"></FontAwesomeIcon>
            <span>© 2019 KKPnP (Ver: 0.0.1), Inc. All rights reserved.</span>
            <span>Terms · Privacy · Site Map</span>
          </div>
          <div className="footer-container-bottom-right"></div>
        </div>
      </div>
    );
  }
}

export default FooterContainer;
