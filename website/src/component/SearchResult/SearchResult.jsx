import React, { Component } from "react";
import "./index.sass";
import { ActivityCard } from "../Card";
import img from "./assets/fakeNP.jpg";

// rs is for test only
import rs from "./nps-rs.json";
class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // rs is for test only
    console.log(rs);
    const cards = this.fatchCard(rs);
    return <div className="cards-holder">{cards}</div>;
  }
  fatchCard = rs => {
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
              stars={5}
              timeCost="2-3h"
            />
          );
        })}
      </div>
    );
  };
}

export default SearchResult;
