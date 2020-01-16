import React, { Component } from "react";
import "./index.sass";
import { Avatar, IconButton } from "@material-ui/core";
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import HotelIcon from '@material-ui/icons/Hotel';
import { ActivityCheckoutCard, FlightCheckoutCard } from "../../Card";
// day{} key=index

class CheckoutOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.props.day,
      index: this.props.index,
      totalDays: this.props.totalDays,
      isChecked: []
    };
    this.initChecked();

  }
  render() {
    return (
      <div className="checkout-overview">
        <div className="left-view">
          <div className="left-view-city">{this.state.day.city.name}</div>
          {!(this.state.index + 1 === this.state.totalDays) &&
            <div className="left-view-line" />}
        </div>
        <div className="day-display">
          <Avatar style={{ backgroundColor: "pink", color: "white" }}>
            D{this.state.index + 1}
          </Avatar>
        </div>
        <div className="content">
          <div className="content-activities">
            <div className="logo">
              <LocalActivityIcon style={{ fontSize: 30 }} />
              &nbsp;Activities
            </div>
            <div className="content-activity-wrapper">
              {this.getActivities()}</div>
          </div>
          <div className="content-transports">
            <div className="logo">
              <FlightTakeoffIcon style={{ fontSize: 30 }} />
              &nbsp;Transports
            </div>
            <div className="content-transport-wrapper">
              {this.getTransports()}</div>
          </div>
          <div className="content-hotel">
            <div className="logo">
              <HotelIcon style={{ fontSize: 30 }} />
              &nbsp;Hotel
            </div>
            <div className="content-hotel-wrapper">{this.getHotel()}</div>
          </div>
        </div>
      </div>
    );
  }
  getActivities = () => {
    let that = this;
    return (
      that.state.day.activities.map(function (activity, index) {
        return (
          <div className="content-activity" key={index}>
            <div className="content-activity-card">
              <ActivityCheckoutCard
                name={activity.name}
                img={activity.img}
                stars={activity.rate}
                timeCost={activity.costTime}
                address={activity.address}
              />
            </div>
            <div className="content-activity-option">
              Price Est.{activity.price}
              {that.state.isChecked[index] ?
                <IconButton onClick={() => that.checkClick(index)}>
                  <CheckCircleOutlineIcon style={{ color: "green", fontSize: 25 }} />
                </IconButton>
                : <IconButton onClick={() => that.checkClick(index)}>
                  <RadioButtonUncheckedIcon style={{ color: "orange", fontSize: 25 }} />
                </IconButton>
              }
            </div>
          </div>
        );
      })
    );
  }
  getTransports = () => {
    let that = this;
    return (
      that.state.day.transports.map(function (transport, index) {
        let i = index + that.state.day.activities.length;
        return (
          <div className="content-transport" key={i}>
            <div className="content-transport-card">
              <FlightCheckoutCard obj={transport} />
            </div>
            <div className="content-transport-option">
              Price Est.{transport.price}
              {that.state.isChecked[i] ?
                <IconButton onClick={() => that.checkClick(i)}>
                  <CheckCircleOutlineIcon style={{ color: "green", fontSize: 25 }} />
                </IconButton>
                : <IconButton onClick={() => that.checkClick(i)}>
                  <RadioButtonUncheckedIcon style={{ color: "orange", fontSize: 25 }} />
                </IconButton>
              }
            </div>
          </div>
        );
      })
    );
  }
  getHotel = () => {
    let i = this.state.totalDays + 1;
    let hotel = this.state.day.hotel;
    return (
      <div className="content-hotel" key={i}>
        <div className="content-hotel-card">
          {hotel.name}
        </div>
        <div className="content-hotel-option">
          Price Est.{hotel.price}
          {this.state.isChecked[i] ?
            <IconButton onClick={() => this.checkClick(i)}>
              <CheckCircleOutlineIcon style={{ color: "green", fontSize: 25 }} />
            </IconButton>
            : <IconButton onClick={() => this.checkClick(i)}>
              <RadioButtonUncheckedIcon style={{ color: "orange", fontSize: 25 }} />
            </IconButton>
          }
        </div>
      </div>
    );
  }
  initChecked = () => {
    var array = [];
    let len = this.state.day.activities.length + this.state.day.transports.length + 1;
    while (len-- > 0) array.push(false);
    // this.setState({ isChecked: array });
    this.state.isChecked = array;
  }
  checkClick = index => {
    var array = this.state.isChecked;
    array[index] = !array[index];
    this.state.isChecked = array;
    this.forceUpdate();
  }
}

export default CheckoutOverview;

// day: {
//   city: { location: { lat: 199, longt: 100 }, name: "San Fransciso" },
//   transports: [
//     {
//       flightNumber: "UA8888",
//       arriveTime: "14:00",
//       departTime: "13:00",
//       Date: "12/1",
//       price: 188,
//       flightCompany: "united airline",
//       duration: "1h0m",
//       arriveAirport: "SFO",
//       departAirport: "SMF"
//     }
//   ],
//   hotel: {
//     name: "JW Marroit SF",
//     img:
//       "https://q-cf.bstatic.com/images/hotel/max1024x768/187/18727539.jpg",
//     location: { lat: 1, longt: 2 },
//     address: "San Francisco UnionSquare",
//     rate: 5,
//     info: "Luxary Hotel",
//     price: 579
//   },
//   activities: [
//     {
//       name: "Fisher Mart",
//       img:
//         "https://upload.wikimedia.org/wikipedia/commons/a/ae/Fishermans_Wharf_Sign%2C_SF%2C_CA%2C_jjron_25.03.2012.jpg",
//       location: { lat: 1, long: 2 },
//       address: "1st, San Franscico, CA ,95618",
//       rate: 4.5,
//       price: 100,
//       costTime: "2h"
//     },
//     {
//       name: "Union Square",
//       img:
//         "https://upload.wikimedia.org/wikipedia/commons/a/ae/Fishermans_Wharf_Sign%2C_SF%2C_CA%2C_jjron_25.03.2012.jpg",
//       location: { lat: 1, long: 2 },
//       address: "1st, San Franscico, CA ,95618",
//       rate: 4.5,
//       price: 1200,
//       costTime: "2h"
//     }
//   ]
// }
