import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import moment from "moment";
import omit from "lodash/omit";
import { isInclusivelyBeforeDay, isExclusivelyBeforeDay } from "react-dates";
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
      endDate: moment(props.initialEndDate),
      index: this.props.index
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
        {/** Below is for DND datePick use only */}
        <ClickAwayListener
          onClickAway={e => this.toggleDayPicker(e)}
          mouseEvent="onMouseUp"
        >
          <DayPickerRangeController
            // {...props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
            numberOfMonths={1}
            isOutsideRange={day => isInclusivelyBeforeDay(day, blackoutDate)}
            keepOpenOnDateSelect={true}
          />
        </ClickAwayListener>
      </div>
    );
  }
  toggleDayPicker = e => {
    document.getElementById(this.state.index).style.display = "none";
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };
  onFocusChange = focusedInput => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? START_DATE : focusedInput
    });
    // close calender if we success pick a range
    if (this.state.focusedInput === END_DATE) {
      this.toggleDayPicker();
    }
  };
}

export default CalendarRP;