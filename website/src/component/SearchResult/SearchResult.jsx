import React, { Component } from "react";
import "./index.sass";
import { ActivityCard } from "../Card";
import img from "./assets/fakeNP.jpg";

// rs is for test only
import rs from "./nps-rs.json";
import flightRs from "./fakeFlight.json";
import FlightCard from "../Card/FlightCard";

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const cards = this.fatchActivityCard(rs);
    const cards = this.fatchFlightCard(flightRs);
    return <div className="cards-holder">{cards}</div>;
  }

  fatchActivityCard = rs => {
    return (
      <div className="card-wrapper">
        {rs.data.map(function (park, _) {
          return (
            <ActivityCard
              name={park.fullName}
              key={park.id}
              img={img}
              id={park.id}
              latLong={park.latLong}
              stars={null}
              timeCost="2-3h"
            />
          );
        })}
      </div>
    );
  };

  fatchFlightCard = rs => {
    return (
      <div className="card-wrapper">
        {rs.map(function (flight, _) {
          return (
            <FlightCard obj={flight} />
          );
        })}
      </div>
    );
  }
}

export default SearchResult;
