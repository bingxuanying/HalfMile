import React, { Component } from "react";
import { TripOverviewDay } from "./TripOverviewDay/";
import "./index.sass";

class TripOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "S496691084's Guide"
    };
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
        <div className="trip-overview-title">{this.state.title}</div>
        <div className="trip-overview-days">{list}</div>
      </div>
    );
  }
}

export default TripOverview;
