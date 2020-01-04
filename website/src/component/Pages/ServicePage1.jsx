import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import HeaderContainer from "../Header/HeaderContainer";
import LocationBox from "../LocationBox/LocationBox";
import "./ServicePage.css";
import Map from "../Map/Map";

class ServicePage1 extends Component {
  render() {
    return (
      <div className="servicepage-containter">
        <div
          style={{ height: "80px", width: "100%", backgroundColor: "white" }}
        >
          <HeaderContainer />
        </div>

        {/* Main */}
        <div className="servicepage-main">
          {/* map section */}
          <div className="servicepage1-map">
            <Map />
          </div>

          {/* Overflow - position: absolute */}
          <LocationBox />
          <button className="servicepage-pre-btn page-btn-bg">
            <FontAwesomeIcon className="page-btn" icon={faCaretLeft} />
          </button>
          <button className="servicepage-next-btn page-btn-bg">
            <FontAwesomeIcon className="page-btn" icon={faCaretRight} />
          </button>
        </div>
      </div>
    );
  }
}

export default ServicePage1;
