import React, { Component } from "react";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import HotelIcon from "@material-ui/icons/Hotel";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import RoomIcon from "@material-ui/icons/Room";
import { Tooltip, Zoom } from "@material-ui/core";

import "./index.sass";
class TripOverviewCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditting: this.props.isEditting,
      startDate: this.props.startDate,
      city: this.props.city,
      isChecked: this.props.isChecked,
      isNextChecked: this.props.isNextChecked,
      // isStart/isEnd decide 2 outer line
      isStart: this.props.isStart,
      isEnd: this.props.isEnd,
      hotel: [
        {
          name: "Marroit JW SanFranscico",
          price: 182,
          startDate: "2/1/2020",
          endDate: "2/3/2020"
        },
        {
          name: "SanFransciso IHG",
          price: 555,
          startDate: "2/3/2020",
          endDate: "2/5/2020"
        }
      ],
      transport: [
        {
          flight: "UA8848",
          departDate: "2/1/2020",
          arriveDate: "2/1/2020",
          departTime: "12:00",
          arriveTime: "14:00",
          price: 1024
        }
      ]
    };
  }

  render() {
    var circleSize = 40;
    var backgroudColor;
    // Highlight current editting
    if (this.state.isEditting) {
      backgroudColor = "rgba(0,255,0,0.25)";
    }
    // This grap all hotel and flight
    const cityInfo = this.getCityInfo();
    const Circle = this.getCircle(circleSize);
    const transport = this.getTransport();
    return (
      <div
        className="trip-overview-city"
        style={{ background: backgroudColor }}
      >
        <Tooltip
          title="edit"
          arrow
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 300 }}
        >
          <div className="trip-overview-city-name">{this.state.city}</div>
        </Tooltip>
        <div className="trip-overview-city-startdate">
          {this.state.startDate}
        </div>
        <div className="trip-overview-city-city">
          <div className="trip-overview-city-city-graph">
            {this.state.isStart ? (
              <div className="left-line-empty" />
            ) : this.state.isChecked ? (
              <div className="left-line-green" />
            ) : (
              <div className="left-line" />
            )}
            <div className="trip-overview-city-city-graph-circle">{Circle}</div>
            {this.state.isEnd ? (
              <div className="right-line-empty" />
            ) : this.state.isChecked && this.state.isNextChecked ? (
              <div className="right-line-green">{transport}</div>
            ) : (
              <div className="right-line">{transport}</div>
            )}
          </div>
        </div>
        <div className="trip-overview-city-text-wrap">{cityInfo}</div>
      </div>
    );
  }
  getCityInfo = () => {
    return <div className="trip-overview-city-text">City Info Here</div>;
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
  getTransport = () => {
    return this.state.transport.map(function(trans, index) {
      return (
        <div className="right-line-transport">
          UA6789
          <InfoOutlinedIcon style={{ fontSize: 17 }} />
        </div>
      );
    });
  };
}

export default TripOverviewCity;
