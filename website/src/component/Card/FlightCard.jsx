import React, { Component } from "react";
// import { Card } from "react-bootstrap";
import { Card, Button } from "@material-ui/core";
import "./index.sass";

import moment from "moment";
import { connect } from "react-redux";
import * as planActions from "../../actions/planActions";

function selectImg(flightCompany) {
  switch (flightCompany) {
    case "American Airline":
      return "//www.gstatic.com/flights/airline_logos/70px/AA.png";
    case "Detal Airline":
      return "//www.gstatic.com/flights/airline_logos/70px/DL.png";
    case "United Airline":
      return "//www.gstatic.com/flights/airline_logos/70px/UA.png";
    default:
      break;
  }
}
function getStops(stops, stopsHour) {
  let info = "";
  let extraInfo = "";
  if (stops === 0) {
    info = "Nonstop";
  } else if (stops === 1) {
    info = stops + " stop";
    extraInfo = stopsHour[0];
  } else {
    info = stops + " stop";
    extraInfo = () => {
      stopsHour.map(function(airport, index) {
        return <div key={index}>{airport}</div>;
      });
    };
  }
  return (
    <div>
      <div className="main-font">{info}</div>
      <div className="light-font">{extraInfo}</div>
    </div>
  );
}
class FlightCard extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var city = this.props.cities[this.props.page - 1];
    var position = city.startDate.diff(this.props.initStartDate, "days") + 1;
    console.log(city, position);

    this.props.updateFlight(this.props.obj, position);
  }

  render() {
    const departTime = this.props.obj.departTime;
    const arriveTime = this.props.obj.arriveTime;
    const flightNumber = this.props.obj.flightNumber;
    const flightCompany = this.props.obj.flightCompany;
    const duration = this.props.obj.duration;
    const departAirport = this.props.obj.departAirport;
    const arriveAirport = this.props.obj.arriveAirport;
    const stops = this.props.obj.stops;
    const stopsHour = this.props.obj.stopsHour;
    const price = this.props.obj.price.basicEco;
    const flightLogo = selectImg(flightCompany);
    return (
      <Card variant="outlined" className="flight-card card">
        <div className="flight-card-body">
          <div className="flight-card-body-img">
            <img src={flightLogo} alt="flightLogo" height="35" width="35" />
            <div className="flight-card-body-time">
              <div className="time">
                {departTime}&nbsp;-&nbsp;{arriveTime}
              </div>
              <div className="flight-company">
                {flightCompany}&nbsp;-&nbsp;{flightNumber}
              </div>
            </div>
          </div>

          <div className="flight-card-body-duration">
            <div className="duration">{duration}</div>
            <div className="airports">
              {departAirport}-{arriveAirport}
            </div>
          </div>
          <div className="flight-card-body-stops">
            {getStops(stops, stopsHour)}
          </div>
          <div className="flight-card-body-space"></div>

          <div className="flight-card-body-option">
            <div className="flight-card-body-price">${price}</div>
            <Button
              className="flight-card-body-option-btn"
              variant="contained"
              color="primary"
              disableElevation
              onClick={this.handleClick}
            >
              Select
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    initStartDate: state.plan[0].startDate,
    cities: state.step.cities,
    page: state.step.page
  };
};

const mapDispatchToProps = () => {
  return {
    updateFlight: planActions.updateFlight
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(FlightCard);
