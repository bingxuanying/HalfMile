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
import { Button, IconButton } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import "./ContentCover.sass";

class ContentCover extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      guestOpen: false,
      adultOverZero: true,
      childOverZero: false,
      infantOverZero: false
    };
    this.toggleDiv = this.toggleDiv.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleSuggestSelect = this.handleSuggestSelect.bind(this);
    this.handleGeoChange = this.handleGeoChange.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  handleSuggestSelect(e) {
    var location = e.gmaps.adr_address;
    var matches = /class="locality">(.*?)<\/span>/g.exec(location);
    if (matches.length > 1) {
      var city = matches[1];
    }

    var homeSelect = {
      name: city,
      location: e.location
    };

    this.props.updateHomeAdress(homeSelect);
  }

  handleGeoChange(e) {
    var homeChange = {
      name: e,
      location: {
        lat: null,
        lng: null
      }
    };

    this.props.updateHomeAdress(homeChange);
  }

  handleStart(e) {
    var homeAddress = this.props.homeAddress;
    var startDate = this.props.startDate;
    var msg = null;

    if (!homeAddress.name) {
      msg = "no address";
    } else if (!homeAddress.location.lat && !homeAddress.location.lng) {
      msg = "no location";
    } else if (!startDate) {
      msg = "no start date";
    } else {
      msg = "none";
    }

    if (msg !== "none") {
      console.log(msg);
      this.props.updateError("init", msg);
    } else if (msg === "none") {
      console.log(msg);
      this.props.changeSection("city");
    }
  }

  render() {
    var adultColor = "grey";
    var childColor = "grey";
    var infantColor = "grey";
    if (this.state.adultOverZero) adultColor = AirbnbColor;
    if (this.state.childOverZero) childColor = AirbnbColor;
    if (this.state.infantOverZero) infantColor = AirbnbColor;
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
                location={
                  new window.google.maps.LatLng(34.0522342, -118.2436849)
                }
                radius={20}
                onChange={this.handleGeoChange}
                onSuggestSelect={this.handleSuggestSelect}
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
              <div className="start-box-guest">
                <Button
                  className="start-box-guest-btn"
                  onClick={this.toggleGuest}
                >
                  {/* It shows how many guests depands on REDUX state */}
                  <span>1 guest</span>
                  {this.state.guestOpen ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </Button>
                {this.state.guestOpen && (
                  <div className="start-box-guest-editbox">
                    <div className="start-box-guest-editbox-form">
                      <div className="start-box-guest-editbox-adult">
                        <div className="text">Adults</div>
                        <IconButton
                          className="p-1"
                          disabled={!this.state.adultOverZero}
                        >
                          <RemoveCircleOutlineIcon
                            style={{
                              fontSize: 36,
                              color: adultColor
                            }}
                          />
                        </IconButton>
                        <div className="number">1+</div>
                        <IconButton className="p-1">
                          <AddCircleOutlineIcon
                            style={{ fontSize: 36, color: AirbnbColor }}
                          />
                        </IconButton>
                      </div>
                      <div className="start-box-guest-editbox-child">
                        <div className="text">Child</div>
                        <IconButton
                          className="p-1"
                          disabled={!this.state.childOverZero}
                        >
                          <RemoveCircleOutlineIcon
                            style={{
                              fontSize: 36,
                              color: childColor
                            }}
                          />
                        </IconButton>
                        <div className="number">0+</div>
                        <IconButton className="p-1">
                          <AddCircleOutlineIcon
                            style={{ fontSize: 36, color: AirbnbColor }}
                          />
                        </IconButton>
                      </div>
                      <div className="start-box-guest-editbox-infant">
                        <div className="text">Infant</div>
                        <IconButton
                          className="p-1"
                          disabled={!this.state.infantOverZero}
                        >
                          <RemoveCircleOutlineIcon
                            style={{
                              fontSize: 36,
                              color: infantColor
                            }}
                          />
                        </IconButton>
                        <div className="number">0+</div>
                        <IconButton className="p-1">
                          <AddCircleOutlineIcon
                            style={{ fontSize: 36, color: AirbnbColor }}
                          />
                        </IconButton>
                      </div>
                    </div>
                    <div className="start-box-guest-editbox-option">
                      <span className="clear" onClick={this.guestClear}>
                        Clear
                      </span>
                      <span className="save" onClick={this.guestSave}>
                        Save
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="start-box-bottom">
              <button type="button" onClick={this.handleStart}>
                <span>Start</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  toggleGuest = () => {
    if (this.state.guestOpen) {
      this.setState({ guestOpen: false });
    } else {
      this.setState({ guestOpen: true });
    }
  };
  guestClear = () => {
    // console.log("clear");
    // Clear the State
  };
  guestSave = () => {
    this.toggleGuest();
  };
}

const mapStateToProps = state => {
  // console.log(state.plan[0].home);
  return {
    homeAddress: state.plan[0].home,
    startDate: state.plan[0].startDate,
    guest: state.plan[0].guest,
    error: state.plan[0].error
  };
};
const AirbnbColor = "rgba(24,143,148,1)";
const mapDispatchToProps = () => {
  return {
    updateHomeAdress: planActions.updateHomeAdress,
    updateError: planActions.updateError,
    changeSection: stepActions.changeSection
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ContentCover);
