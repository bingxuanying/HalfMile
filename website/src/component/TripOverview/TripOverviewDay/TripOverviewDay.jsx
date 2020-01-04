import React, { Component } from "react";
import {
  IoIosRadioButtonOff,
  IoMdCheckmarkCircleOutline
} from "react-icons/io";

import "./index.sass";

class TripOverviewDay extends Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  render() {
    return (
      <div className="trip-overview-day">
        <div className="trip-overview-day-daydisplay">Day1</div>
        <div className="trip-overview-day-dashline">
          <div className="vertical-line"></div>
        </div>
        <div className="trip-overview-day-city">
          <div className="trip-overview-day-city-graph">
            <div className="trip-overview-day-city-graph-circle"></div>
            <div className="trip-overview-day-city-graph-line"></div>
          </div>
          <div className="trip-overview-day-city-text">Davis</div>
        </div>
        <div className="trip-overview-day-routine">Routine here12312312</div>
      </div>
    );
  }
}

export default TripOverviewDay;
