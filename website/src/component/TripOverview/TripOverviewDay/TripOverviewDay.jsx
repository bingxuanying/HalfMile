import React, { Component } from "react";

class TripOverviewDay extends Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  render() {
    return (
      <div className="trip-overview-day">
        <div className="trip-overview-day-daydisplay">Day1</div>
        <div className="trip-overview-day-dashline">{/* {Dash here} */}</div>
        <div className="trip-overview-day-city">Davis</div>
        <div className="trip-overview-day-routine">Routine here</div>
      </div>
    );
  }
}

export default TripOverviewDay;
