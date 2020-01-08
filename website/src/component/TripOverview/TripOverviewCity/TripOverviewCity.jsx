import React, { Component } from "react";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import HotelIcon from "@material-ui/icons/Hotel";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Tooltip, Zoom, Fade } from "@material-ui/core";


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
      hotel: this.props.hotel,
      transport: this.props.transport
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
          title="edit hotel"
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
    var that = this;
    return (
      <div className="trip-overview-city-text">
        <HotelIcon />
        {this.state.hotel.map(function (hotel, index) {
          return (
            <div className="hotel" key={index}>
              <div className="hotel-text">
                <FiberManualRecordIcon style={{ fontSize: 15 }} />
                {hotel.name}
              </div>
              <div className="hotel-info">
                <Tooltip arrow
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 300 }}
                  title={that.getHotelInfo(hotel)}>
                  <InfoOutlinedIcon style={{ fontSize: 15 }} />
                </Tooltip>
              </div>
            </div>);
        })}
      </div>);
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
    var that = this;
    return this.state.transport.map(function (trans, index) {
      return (
        <div className="right-line-transport" key={index}>
          <Tooltip title="click to edit flight">
            <span>{trans.flight}</span></Tooltip>
          <Tooltip arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title={that.getTransportInfo(trans)}>
            <InfoOutlinedIcon style={{ fontSize: 17 }} />
          </Tooltip>
        </div>
      );
    });
  }
  getTransportInfo = (trans) => {
    return (
      <div className="mb-1">
        <p className="mb-1">
          <span><FlightTakeoffIcon style={{ fontSize: 18 }} />&nbsp;</span>
          <span>{trans.flight}</span>
          <span>&nbsp;${trans.price}</span>
        </p>
        <p className="mb-2">
          <span>{trans.departAirport}&nbsp;-&nbsp;{trans.arriveAirport}</span>
        </p>
        <p className="mb-1">
          <span>{trans.departDate}&nbsp;{trans.departTime}&nbsp;-&nbsp;{trans.arriveTime}</span>
        </p>
      </div>
    );
  };
  getHotelInfo = (hotel) => {
    return (
      <div className="hotel-more-info">
        <p className="hotel-more-info-name mb-1">
          <span className="hotel-more-info-name-text">
            <HotelIcon />&nbsp;
            {hotel.name}&nbsp;
          </span>
          <span className="hotel-more-info-name-price">${hotel.price}</span>
        </p>
        <p className="hotel-more-info-date mb-1">
          <EventAvailableIcon />&nbsp;
          {hotel.startDate}&nbsp;-&nbsp;{hotel.endDate}
        </p>
        <p className="hotel-more-info-location mb-1">
          <LocationOnIcon />&nbsp;
          {hotel.location}
        </p>
        <div className="hotel-more-info-pic-wrap mb-1">
          <img className="hotel-more-info-pic" src={hotel.img} alt="hotel-img"></img>
        </div>
      </div>
    );
  }
}

export default TripOverviewCity;
