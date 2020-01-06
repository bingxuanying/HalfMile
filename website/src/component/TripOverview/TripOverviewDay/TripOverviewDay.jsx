import React, { Component } from "react";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import HotelIcon from "@material-ui/icons/Hotel";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

import "./index.sass";
class TripOverviewDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditting: this.props.isEditting,
      day: this.props.day,
      isChecked: this.props.isChecked,
      isStart: this.props.isStart,
      isEnd: this.props.isEnd,
      startCity: this.props.startCity,
      endCity: this.props.endCity,
      hotel: ["Marroit JW SanFranscico"],
      transport: ["UA8848"]
    };
  }

  render() {
    // this.getProps();
    console.log(this.state.isEditting);
    var circleSize;
    var largeCircle;
    var backgroudColor;
    // Change Circle font-size
    if (this.state.startCity === this.state.endCity) {
      circleSize = 24;
      largeCircle = false;
    } else {
      circleSize = 40;
      largeCircle = true;
    }
    // Highlight current editting
    if (this.state.isEditting) {
      backgroudColor = "rgba(0,255,0,0.25)";
    }
    // This grap all hotel and flight
    const dayInfo = this.getInfo();
    const Circle = this.getCircle(circleSize);
    return (
      <div className="trip-overview-day" style={{ background: backgroudColor }}>
        <div className="trip-overview-day-daydisplay">Day{this.state.day}</div>
        {largeCircle ? (
          <div />
        ) : (
          <div className="trip-overview-day-space-top"></div>
        )}
        <div className="trip-overview-day-dashline">
          <div className="vertical-line"></div>
        </div>
        <div className="trip-overview-day-city">
          <div className="trip-overview-day-city-graph">
            {this.state.isStart ? (
              <div className="left-line-empty"></div>
            ) : (
              <div className="left-line" />
            )}
            <div className="trip-overview-day-city-graph-circle">{Circle}</div>
            {this.state.isEnd ? (
              <div className="right-line-empty"></div>
            ) : (
              <div className="right-line" />
            )}
          </div>
          <div className="trip-overview-day-city-text">
            {this.state.endCity}
          </div>
        </div>
        {largeCircle ? (
          <div />
        ) : (
          <div className="trip-overview-day-space-bot"></div>
        )}
        <div className="trip-overview-day-text-wrap">{dayInfo}</div>
      </div>
    );
  }
  getInfo = () => {
    return (
      <div className="trip-overview-day-text d-inline-block">
        <div className="hotel mb-1">
          <HotelIcon />
          {this.state.hotel.map(function(hotel, index) {
            return (
              <p className="hotel-name mb-0 pl-0" key={index}>
                {hotel}
              </p>
            );
          })}
        </div>
        <div className="transport mb-1">
          <FlightTakeoffIcon />
          {this.state.transport.map(function(trans, index) {
            return (
              <p className="transport-name mb-0 pl-0" key={index}>
                {trans}
              </p>
            );
          })}
        </div>
      </div>
    );
  };
  getCircle = circleSize => {
    if (this.state.isEditting) {
      return (
        <RotateRightIcon
          style={{
            fontSize: circleSize,
            color: "orange",
            animation: "rotation 5s infinite linear"
          }}
        />
      );
    }
    if (this.state.isChecked) {
      return (
        <CheckCircleOutlinedIcon
          style={{ fontSize: circleSize, color: "green" }}
        />
      );
    } else {
      return <RadioButtonUncheckedIcon style={{ fontSize: circleSize }} />;
    }
  };
}

export default TripOverviewDay;
