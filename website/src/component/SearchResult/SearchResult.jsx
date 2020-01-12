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
    this.state = {
      type: this.props.type
    };
  }

  render() {
    let cards = [];
    let style = {};
    switch (this.state.type) {
      case "activity":
        cards = this.fatchActivityCard(rs);
        break;
      case "flight":
        cards = this.fatchFlightCard(flightRs);
        style = { overflowY: "auto" };
        break;
      default:
        console.error("wrong type in SearchResult");
        break;
    }

    return (
      <div className="cards-holder" style={style}>
        {cards}
      </div>
    );
  }

  fatchActivityCard = rs => {
    return (
      <div className="card-wrapper">
        {rs.data.map(function(park, _) {
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
        {rs.map(function(flight, index) {
          return <FlightCard obj={flight} key={"flight" + index} />;
        })}
      </div>
    );
  };
}

export default SearchResult;
