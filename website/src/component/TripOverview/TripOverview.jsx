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
      <TripOverviewDay day={1} isChecked={false} isEnd={false} isStart={true} location="Davis" />,
      <TripOverviewDay day={2} isChecked={false} isEnd={false} isStart={false} location="SF" />,
      <TripOverviewDay day={3} isChecked={false} isEnd={false} isStart={false} location="SF" />,
      <TripOverviewDay day={4} isChecked={false} isEnd={false} isStart={false} location="SF" />,
      <TripOverviewDay day={3} isChecked={false} isEnd={false} isStart={false} location="SF" />,
      <TripOverviewDay day={5} isChecked={false} isEnd={true} isStart={false} location="Davis" />
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
