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

const START_DATE = "startDate";
const END_DATE = "endDate";

// Usage :
//   <CalendarRP initialStartDate={moment()} />
//
class CalendarRP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE,
      focusedInput: props.initialStartDate ? END_DATE : START_DATE,
      // startDate: moment().add(1, 'days'),
      startDate: moment(props.initialStartDate),
      endDate: moment(props.initialEndDate)
    };
  }

  render() {
    const { showInputs } = this.props;
    const { focusedInput, startDate, endDate, minDate } = this.state;

    const props = omit(this.props, [
      "autoFocus",
      "autoFocusEndDate",
      "initialStartDate",
      "initialEndDate",
      "showInputs"
    ]);
    const startDateString = startDate && startDate.format("YYYY-MM-DD");
    const endDateString = endDate && endDate.format("YYYY-MM-DD");
    const blackoutDate = moment(this.props.initialStartDate).subtract(
      1,
      "days"
    );
    console.log("Start: " + startDateString + "\nEnd: " + endDateString);

    return (
      <div className="app">
        <DayPickerRangeController
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          numberOfMonths={1}
          isOutsideRange={day => isInclusivelyBeforeDay(day, blackoutDate)}
          keepOpenOnDateSelect={false}
        />
      </div>
    );
  }

  onDatesChange = ({ startDate, endDate }) => {
    var dayDiff = endDate.diff(
      this.props.cities[this.props.index].endDate,
      "days"
    );

    this.props.updateCityDate(
      this.props.index,
      moment(startDate),
      moment(endDate),
      dayDiff
    );
  };

  onFocusChange = focusedInput => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? START_DATE : focusedInput
    });
  };
}

export default CalendarRP;
