import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import { Button } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import moment from 'moment';
import omit from 'lodash/omit';
import { isInclusivelyBeforeDay, isExclusivelyBeforeDay } from 'react-dates';
import "./index.sass";

const START_DATE = 'startDate';
const END_DATE = 'endDate';


// Usage :
//  <Calendar initialStartDate={moment().add(1, 'days')}
// initialEndDate={moment().add(5, 'days')} type="DayPickerRangeController" />
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
      type: props.type,
    };
  }
  render() {
    const { showInputs } = this.props;
    const { focusedInput, startDate, endDate, minDate } = this.state;

    const props = omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'showInputs',
    ]);
    const startDateString = startDate && startDate.format('YYYY-MM-DD');
    const endDateString = endDate && endDate.format('YYYY-MM-DD');
    const blackoutDate = moment(this.props.initialStartDate).subtract(1, 'days');
    console.log("Start: " + startDateString + "\nEnd: " + endDateString);
    if (this.state.type != "DayPickerRangeController") {
      return (
        <div className="app">
          <DateRangePicker
            startDate={this.state.startDate}
            startDateId="your_unique_start_date_id"
            endDate={this.state.endDate}
            endDateId="you_unique_end_date_id"
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            }
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
        </div>
      );
    } else {
      return (
        <div className="app">
          {/* <SingleDatePicker
          placeholder="mm/dd/yyy"
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="single-date"
        /> */}

          {/** Below is for DND datePick use only */}
          <Button onClick={this.toggleDayPicker}>Toggle DayPicker</Button>
          {this.state.pickerOpen && (
            <ClickAwayListener onClickAway={this.toggleDayPicker}>
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
          )}
        </div>
      );
    }
  }
  toggleDayPicker = () => {
    // startDate/endDate is TimeStamp
    this.setState({ pickerOpen: !this.state.pickerOpen });
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  }
  onFocusChange = (focusedInput) => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? START_DATE : focusedInput,
    });
    // close calender if we success pick a range
    if (this.state.focusedInput === END_DATE) {
      this.toggleDayPicker();
    }
  }
}

export default CalendarRP;
