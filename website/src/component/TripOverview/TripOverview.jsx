import React, { Component } from "react";
import { TripOverviewDay } from "./TripOverviewDay/index";

class TripOverview extends Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  render() {
    // add props into TripOverviewDay
    let list = [
      <TripOverviewDay />,
      <TripOverviewDay />,
      <TripOverviewDay />,
      <TripOverviewDay />,
      <TripOverviewDay />
    ];
    return (
      <div className="trip-overview">
        <div className="trip-overview-title">Title Here!!!</div>
        <div className="trip-overview-days">{list}</div>
      </div>
    );
  }
}

export default TripOverview;
