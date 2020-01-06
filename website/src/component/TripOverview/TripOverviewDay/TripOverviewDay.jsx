import React, { Component } from "react";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import "./index.sass";
class TripOverviewDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditting: true,
      day: this.props.day,
      isChecked: this.props.isChecked,
      isStart: this.props.isStart,
      isEnd: this.props.isEnd,
      startCity: this.props.startCity,
      endCity: this.props.endCity,
      hotel: ["Marroit", "IHG"],
      transport: ["UA8848"]
    };
  }

  render() {
    this.getProps();
    var circleSize;
    var largeCircle;
    if (this.state.startCity === this.state.endCity) {
      circleSize = 24;
      largeCircle = false;
    } else {
      circleSize = 40;
      largeCircle = true;
    }
    const dayInfo = this.getInfo();
    return (
      <div className="trip-overview-day">
        {largeCircle ? (
          <div />
        ) : (
          <div className="trip-overview-day-space-top"></div>
        )}
        <div className="trip-overview-day-daydisplay">Day{this.state.day}</div>
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
            <div className="trip-overview-day-city-graph-circle">
              {this.state.isChecked ? (
                <CheckCircleOutlinedIcon
                  style={{ fontSize: circleSize, color: "green" }}
                />
              ) : (
                <RadioButtonUncheckedIcon style={{ fontSize: circleSize }} />
              )}
            </div>
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
  getProps = () => {
    if (this.props.isEditting) {
      this.setState({ isEditting: true });
    }
  };
  getInfo = () => {
    return (
      <div
        className="trip-overview-day-text 
      d-inline-block text-truncate"
      >
        <p className="hotel mb-1">
          Hotel:
          {this.state.hotel.map(function(hotel, index) {
            return (
              <p className="hotel-name mb-0 pl-2" key={index}>
                {hotel}
              </p>
            );
          })}
        </p>
        <p className="transport mb-1">
          Transport:
          {this.state.transport.map(function(trans, index) {
            return (
              <p className="transport-name mb-0 pl-2" key={index}>
                {trans}
              </p>
            );
          })}
        </p>
      </div>
    );
  };
}

export default TripOverviewDay;
