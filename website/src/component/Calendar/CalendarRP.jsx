import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import moment from "moment";
import omit from "lodash/omit";
import { isInclusivelyBeforeDay } from "react-dates";
import "./index.sass";

import { connect } from "react-redux";
import * as stepActions from "../../actions/stepActions";
const START_DATE = "startDate";
const END_DATE = "endDate";
// Usage :
//   <CalendarRP initialStartDate={moment()} />
//
class CalendarRP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: END_DATE
    };
  }
  render() {
    const idx = this.props.index;

    const props = omit(this.props, [
      "autoFocus",
      "autoFocusEndDate",
      "initialStartDate",
      "initialEndDate",
      "showInputs"
    ]);
    // const startDateString = startDate && startDate.format("YYYY-MM-DD");
    // const endDateString = endDate && endDate.format("YYYY-MM-DD");
    const blackoutDate = moment(this.props.initialStartDate).subtract(
      1,
      "days"
    );
    // console.log("Start: " + startDateString + "\nEnd: " + endDateString);

    return (
      <div className="app">
        <DayPickerRangeController
          onDatesChange={this.onDatesChange}
          onFocusChange={() => this.onFocusChange("endDate")}
          focusedInput={this.state.focusedInput}
          startDate={moment(
            idx === 0
              ? this.props.initStartDate
              : this.props.cities[idx - 1].endDate
          )}
          endDate={this.props.cities[idx].endDate}
          numberOfMonths={1}
          isOutsideRange={day => isInclusivelyBeforeDay(day, blackoutDate)}
          keepOpenOnDateSelect={false}
        />
      </div>
    );
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.updateCityDate(this.props.index, startDate, endDate);
  };

  // not for current situation
  onFocusChange = focusedInput => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: "endDate"
    });
    // close calender if we success pick a range
    // if (this.state.focusedInput === END_DATE) {
    //   this.toggleDayPicker();
    // }
  };
}

const mapStateToProps = state => {
  return {
    initStartDate: state.plan[0].startDate,
    cities: state.step.cities
  };
};

const mapDispatchToProps = () => {
  return {
    updateCityDate: stepActions.updateCityDate
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CalendarRP);
