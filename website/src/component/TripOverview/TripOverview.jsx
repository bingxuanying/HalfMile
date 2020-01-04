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
      <TripOverviewDay key="1" day={1} isChecked={true} isEnd={false} isStart={true} startCity="Davis" endCity="SF" />,
      <TripOverviewDay key="2" day={2} isChecked={true} isEnd={false} isStart={false} startCity="SF" endCity="SF" />,
      <TripOverviewDay key="3" day={3} isChecked={false} isEnd={false} isStart={false} startCity="SF" endCity="SF" />,
      <TripOverviewDay key="4" day={4} isChecked={false} isEnd={false} isStart={false} startCity="SF" endCity="SF" />,
      <TripOverviewDay key="6" day={3} isChecked={false} isEnd={false} isStart={false} startCity="SF" endCity="SF" />,
      <TripOverviewDay key="5" day={5} isChecked={false} isEnd={true} isStart={false} startCity="SF" endCity="Davis" />
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
