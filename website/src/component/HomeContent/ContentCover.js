import React, { Component } from "react";
import coverImg from "../../assets/Cover.jpg";
import Geosuggest from "react-geosuggest";
import { connect } from "react-redux";
import * as planActions from "../../actions/planActions";
import * as stepActions from "../../actions/stepActions";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import Calendar from "../Calender/Calender";

import "./ContentCover.sass";

class ContentCover extends Component {
  constructor() {
    super();

    this.state = { show: true };
    this.toggleDiv = this.toggleDiv.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  onSuggestSelect(e) {
    var location = e.gmaps.adr_address;
    var matches = /class="locality">(.*?)<\/span>/g.exec(location);
    if (matches.length > 1) {
      var city = matches[1];
    }

    var home = {
      name: city,
      location: e.location
    };

    this.props.updateHomeAdress(home);
  }

  handleStart(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="content-cover">
        <img src={coverImg} className="cover-image" alt="Cover Image"></img>
        <div className="start-box">
          <div className="start-box-header">
            <h1>Take a break and award yourself a memorable trip</h1>
          </div>
          <div className="start-box-content">
            <div className="start-box-row">
              <div className="start-box-subtitle">HOME ADDRESS</div>
              <Geosuggest
                placeholder="Where you live"
                autoCorrect="off"
                spellCheck="false"
                onSuggestSelect={this.onSuggestSelect}
                location={
                  new window.google.maps.LatLng(34.0522342, -118.2436849)
                }
                radius={20}
                onSuggestSelect={this.onSuggestSelect}
              />
            </div>

            <div className="start-box-row">
              <div className="start-box-50subrow">
                <div className="start-box-subtitle">START DATE</div>
                <Calendar />
              </div>
              <div className="start-box-50subrow">
                <div className="start-box-subtitle">END DATE</div>
                <Calendar />
              </div>
            </div>

            <div className="start-box-row">
              <div className="start-box-subtitle">NUMBER OF PEOPLE</div>
            </div>
            <div className="start-box-bottom">
              <button type="submit" onClick={this.handleStart}>
                <span>Start</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.plan[0].home);
  return {
    homeAddress: state.plan[0].home
  };
};

const mapDispatchToProps = () => {
  return {
    updateHomeAdress: planActions.updateHomeAdress,
    changeSection: stepActions.changeSection
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ContentCover);
