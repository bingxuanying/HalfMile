import React, { Component } from "react";
import Calender from "../Calender/Calender";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import LocationBox from "../LocationBox/LocationBox";
import "./PlanPage.sass";
import Map from "../Map/Map";

class PlanPage_Part1 extends Component {
  render() {
    return (
      <div className="planpage-containter">
        <div
          style={{ height: "80px", width: "100%", backgroundColor: "white" }}
        ></div>
        {/* Main */}
        <div className="planpage-main">
          {/* map section */}
          <div className="planpage1-map">
            <Map />
          </div>

          {/* Overflow - position: absolute */}
          <LocationBox />
          <button className="planpage-pre-btn page-btn-bg">
            <FontAwesomeIcon className="page-btn" icon={faCaretLeft} />
          </button>
          <button className="planpage-next-btn page-btn-bg">
            <FontAwesomeIcon className="page-btn" icon={faCaretRight} />
          </button>
        </div>
      </div>
    );
  }
}

export default PlanPage_Part1;
