import React, { Component } from "react";
import "./index.sass";
import { ActivityCard, FlightCard, HotelCard } from "../Card";
import img from "./assets/fakeNP.jpg";
// Redux
import { connect } from "react-redux";
// rs is for test only
import flightRs from "./fakeFlight.json";
import hotelRs from "./fakeHotel.json";

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
        cards = this.fetchActivityCard(this.props.resultList);
        break;
      case "airline":
        cards = this.fetchFlightCard(flightRs);
        style = { overflowY: "auto" };
        break;
      case "hotel":
        cards = this.fetchHotelCard(hotelRs);
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

  fetchActivityCard = rs => {
    console.log(rs);

    if (!rs) return <div></div>;
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
              info={park.description}
            />
          );
        })}
      </div>
    );
  };

  fetchFlightCard = rs => {
    return (
      <div className="card-wrapper">
        {rs.map(function (flight, index) {
          return <FlightCard obj={flight} key={"flight" + index} />;
        })}
      </div>
    );
  };

  fetchHotelCard = rs => {
    return (
      <div className="card-wrapper">
        {rs.map(function (park, index) {
          return <HotelCard key={index} obj={park} />;
        })}
      </div>
    );
  };
}
const mapStateToProps = state => {
  return {
    resultList: state.result.resultList
  };
};

export default connect(mapStateToProps)(SearchResult);
