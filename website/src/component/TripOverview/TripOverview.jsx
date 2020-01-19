import React, { Component } from "react";
import { TripOverviewDay } from "./TripOverviewDay/";
import { TripOverviewCity } from "./TripOverviewCity/";
import img1 from "./TripOverviewCity/assets/hotel-jwmarroit.png";
import img2 from "./TripOverviewCity/assets/igh-sf.jpeg";

import "./index.sass";
import { connect } from "react-redux";

class TripOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My 1st Trip"
    };
  }
  getCityList = () => {
    return this.props.cities.map((city, index) => {
      return (
        <TripOverviewCity
          key={index}
          index={index}
          startDate={city.startDate}
          hotel={this.props.plan[this.findDay(index)].hotel}
          transport={this.props.plan[this.findDay(index)].transport}
        />
      );
    });
  };
  findDay = index => {
    return (
      this.props.cities[index].startDate.diff(
        this.props.cities[0].startDate,
        "days"
      ) + 1
    );
  };
  getDayList = () => {
    return this.props.plan.map((day, index) => {
      if (index !== 0) return <TripOverviewDay index={index} />;
    });
  };
  render() {
    var cityList = this.getCityList();
    var dayList = this.getDayList();
    // add props into TripOverviewDay
    let hotel1 = [
      {
        name: "Marroit JW SanFranscico",
        price: 182,
        startDate: "2/1/2020",
        endDate: "2/3/2020",
        location: "Union St. 144",
        img: img1
      }
    ];
    let hotel2 = [
      {
        name: "SanFransciso IHG",
        price: 555,
        startDate: "2/3/2020",
        endDate: "2/5/2020",
        location: "Fisher Blvd. 111",
        img: img2
      }
    ];
    let transport = [
      {
        flight: "UA8848",
        departDate: "2/1/2020",
        arriveDate: "2/1/2020",
        departTime: "12:00",
        arriveTime: "14:00",
        price: 1024,
        departAirport: "SFO",
        arriveAirport: "LAX"
      },
      {
        flight: "UA8148",
        departDate: "2/1/2020",
        arriveDate: "2/1/2020",
        departTime: "14:00",
        arriveTime: "16:00",
        price: 999,
        departAirport: "LAX",
        arriveAirport: "SLC"
      }
    ];
    let transport1 = [
      {
        flight: "UA8848",
        departDate: "2/1/2020",
        arriveDate: "2/1/2020",
        departTime: "12:00",
        arriveTime: "14:00",
        price: 1024,
        departAirport: "SFO",
        arriveAirport: "LAX"
      }
    ];
    let transport2 = [
      {
        flight: "UA8148",
        departDate: "2/1/2020",
        arriveDate: "2/1/2020",
        departTime: "14:00",
        arriveTime: "16:00",
        price: 999,
        departAirport: "LAX",
        arriveAirport: "SLC"
      }
    ];
    let act = [
      { name: "Union Square", price: 165, time: "1h" },
      { name: "Golden Gate", price: 0, time: "2h" },
      { name: "Fisherman's Wharf", price: 100, time: "1.5h" }
    ];
    let Daylist = [
      <TripOverviewDay
        isEditting={false}
        key="1"
        day={1}
        isChecked={true}
        isEnd={false}
        isStart={true}
        startCity="Davis"
        endCity="SF"
        hotel={hotel1}
        transport={transport}
        activities={act}
      />,
      <TripOverviewDay
        isEditting={false}
        key="2"
        day={2}
        isChecked={true}
        isEnd={false}
        isStart={false}
        startCity="SF"
        endCity="SF"
        hotel={hotel1}
        transport={[]}
        activities={act}
      />,
      <TripOverviewDay
        isEditting={true}
        key="3"
        day={3}
        isChecked={false}
        isEnd={false}
        isStart={false}
        startCity="SF"
        endCity="SF"
        hotel={hotel1}
        transport={[]}
        activities={act}
      />,
      <TripOverviewDay
        isEditting={false}
        key="4"
        day={4}
        isChecked={false}
        isEnd={false}
        isStart={false}
        startCity="SF"
        endCity="SF"
        hotel={hotel2}
        transport={[]}
        activities={act}
      />,
      <TripOverviewDay
        isEditting={false}
        key="6"
        day={3}
        isChecked={false}
        isEnd={false}
        isStart={false}
        startCity="SF"
        endCity="SF"
        hotel={hotel2}
        transport={[]}
        activities={act}
      />,
      <TripOverviewDay
        isEditting={false}
        key="5"
        day={5}
        isChecked={false}
        isEnd={true}
        isStart={false}
        startCity="SF"
        endCity="Davis"
        hotel={hotel2}
        transport={[]}
        activities={act}
      />
    ];
    let CityList = [
      <TripOverviewCity
        key="1"
        isEditting={false}
        city="SF"
        isChecked={true}
        isStart={true}
        isEnd={false}
        isNextChecked={true}
        startDate="12/1"
        hotel={hotel1}
        transport={transport1}
      />,
      <TripOverviewCity
        key="2"
        isEditting={false}
        city="LA"
        isChecked={true}
        isStart={false}
        isEnd={false}
        isNextChecked={false}
        startDate="12/5"
        hotel={hotel2}
        transport={transport2}
      />
    ];

    return (
      <div className="trip-overview">
        <div className="trip-overview-title">{this.state.title}</div>
        <div className="trip-overview-fullwidth">
          {this.props.section === "activity" ? (
            <div className="trip-overview-content">{dayList}</div>
          ) : (
            <div className="trip-overview-content">{cityList}</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    section: state.step.section,
    page: state.step.page,
    cities: state.step.cities,
    plan: state.plan
  };
};

export default connect(mapStateToProps)(TripOverview);
