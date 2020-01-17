import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Geosuggest from "react-geosuggest";
import { connect } from "react-redux";
import * as planActions from "../../actions/planActions";
import * as stepActions from "../../actions/stepActions";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import coverImg from "../../assets/Cover.jpg";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import { Calendar, CalendarRP } from "../Calendar";
import { Button, IconButton, ClickAwayListener, Fade } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import "./ContentCover.sass";
import InfoBar from "../InfoBar";
import moment from 'moment';
const AirbnbColor = "rgba(24,143,148,1)";

class ContentCover extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      guestOpen: false,
      infoBarShow: false,
      warningDelay: 2000
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

  handleSuggestSelect(place) {
    if (place) {
      var location = place.gmaps.adr_address;
      var matches = /class="locality">(.*?)<\/span>/g.exec(location);
      if (matches.length > 1) {
        var city = matches[1];
      }

      var homeSelect = {
        name: city,
        location: place.location
      };

      this.props.updateHomeAdress(homeSelect);
    }
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
    // Test code for snackBar
    if (!homeAddress.name) {
      msg = "no address";
    } else if (!homeAddress.location.lat && !homeAddress.location.lng) {
      msg = "no location";
    }
    // else if (!startDate) {
    //   msg = "no start date";
    // }
    else {
      msg = "none";
    }

    if (msg !== "none") {
      this.props.updateError("init", msg);

      // InfoBar things
      this.setState({ infoBarShow: true });
      switch (msg) {
        case "no address":
        case "no location":
          addressWarning();
          setTimeout(() => {
            setAddressBack();
          }, this.state.warningDelay + 10);
          break;
        case "no start date":
          dateWarning();
          setTimeout(() => {
            setDateBack();
          }, this.state.warningDelay + 10);
          break;
        default:
          break;
      }
    } else if (msg === "none") {
      this.props.changeSection_none2city("city");
      this.props.history.push("/plan");
    }
  }

  render() {
    var adultColor = "grey";
    var childColor = "grey";
    var infantColor = "grey";
    if (this.props.guest.adults > 1) adultColor = AirbnbColor;
    if (this.props.guest.children > 0) childColor = AirbnbColor;
    if (this.props.guest.infants > 0) infantColor = AirbnbColor;
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
              </div>
              <div className="start-box-50subrow">
                <div className="start-box-subtitle">END DATE</div>
              </div>
            </div>
            {/* <CalendarRP initialStartDate={moment()}
              type="DayPickerRangeController" /> */}
            <Calendar />

            <div className="start-box-row">
              <div className="start-box-subtitle">NUMBER OF PEOPLE</div>
              <div className="start-box-guest">
                <Button
                  className="start-box-guest-btn"
                  onClick={this.toggleGuest}
                >
                  {/* It shows how many guests depands on REDUX state */}
                  <span>
                    {this.props.guest.adults +
                      this.props.guest.children +
                      this.props.guest.infants}{" "}
                    guest
                  </span>
                  {this.state.guestOpen ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </Button>
                {this.state.guestOpen && (
                  <ClickAwayListener onClickAway={this.guestSave}>
                    <div className="start-box-guest-editbox">
                      <div className="start-box-guest-editbox-form">
                        <div className="start-box-guest-editbox-adult">
                          {/* adults */}
                          <div className="text">Adults</div>
                          <IconButton
                            className="p-1"
                            disabled={!(this.props.guest.adults > 1)}
                            onClick={() => {
                              this.props.guestDecrement("adults");
                            }}
                          >
                            <RemoveCircleOutlineIcon
                              style={{
                                fontSize: 36,
                                color: adultColor
                              }}
                            />
                          </IconButton>
                          <div className="number">
                            {this.props.guest.adults}
                          </div>
                          <IconButton
                            className="p-1"
                            onClick={() => {
                              this.props.guestIncreament("adults");
                            }}
                          >
                            <AddCircleOutlineIcon
                              style={{ fontSize: 36, color: AirbnbColor }}
                            />
                          </IconButton>
                        </div>
                        <div className="start-box-guest-editbox-child">
                          {/* children */}
                          <div className="text">Child</div>
                          <IconButton
                            className="p-1"
                            disabled={!(this.props.guest.children > 0)}
                            onClick={() => {
                              this.props.guestDecrement("children");
                            }}
                          >
                            <RemoveCircleOutlineIcon
                              style={{
                                fontSize: 36,
                                color: childColor
                              }}
                            />
                          </IconButton>
                          <div className="number">
                            {this.props.guest.children}
                          </div>
                          <IconButton
                            className="p-1"
                            onClick={() => {
                              this.props.guestIncreament("children");
                            }}
                          >
                            <AddCircleOutlineIcon
                              style={{ fontSize: 36, color: AirbnbColor }}
                            />
                          </IconButton>
                        </div>
                        <div className="start-box-guest-editbox-infant">
                          {/* infants */}
                          <div className="text">Infant</div>
                          <IconButton
                            className="p-1"
                            disabled={!(this.props.guest.infants > 0)}
                            onClick={() => {
                              this.props.guestDecrement("infants");
                            }}
                          >
                            <RemoveCircleOutlineIcon
                              style={{
                                fontSize: 36,
                                color: infantColor
                              }}
                            />
                          </IconButton>
                          <div className="number">
                            {this.props.guest.infants}
                          </div>
                          <IconButton
                            className="p-1"
                            onClick={() => {
                              this.props.guestIncreament("infants");
                            }}
                          >
                            <AddCircleOutlineIcon
                              style={{ fontSize: 36, color: AirbnbColor }}
                            />
                          </IconButton>
                        </div>
                      </div>
                      <div className="start-box-guest-editbox-option">
                        <span
                          className="clear"
                          onClick={() => this.props.guestClear()}
                        >
                          Clear
                        </span>
                        <span className="save" onClick={this.guestSave}>
                          Save
                        </span>
                      </div>
                    </div>
                  </ClickAwayListener>
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

        {this.state.infoBarShow && (
          <InfoBar
            open={this.state.infoBarShow}
            onClose={this.closeInfoBar}
            autoHideDuration={this.state.warningDelay}
            message={this.props.error}
            type="error"
          />
        )}
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
  closeInfoBar = (event, reason) => {
    this.setState({ infoBarShow: false });
  };
}
const addressWarning = () => {
  document.getElementsByClassName("geosuggest__input")[0].style.border =
    "1px solid red";
  document.getElementsByClassName("start-box-subtitle")[0].style.color = "red";
};
const setAddressBack = () => {
  document.getElementsByClassName("geosuggest__input")[0].style.border =
    "1px solid #ebebeb";
  document.getElementsByClassName("start-box-subtitle")[0].style.color =
    "#484848";
};
const dateWarning = () => {
  document.getElementsByClassName("start-box-subtitle")[1].style.color = "red";
};
const setDateBack = () => {
  document.getElementsByClassName("start-box-subtitle")[1].style.color =
    "#484848";
};

const mapStateToProps = state => {
  return {
    homeAddress: state.plan[0].home,
    startDate: state.plan[0].startDate,
    guest: state.plan[0].guest,
    error: state.plan[0].error
  };
};

const mapDispatchToProps = () => {
  return {
    updateHomeAdress: planActions.updateHomeAdress,
    updateError: planActions.updateError,
    changeSection_none2city: stepActions.changeSection_none2city,
    guestIncreament: planActions.guestIncreament,
    guestDecrement: planActions.guestDecrement,
    guestClear: planActions.guestClear
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps())(ContentCover)
);
