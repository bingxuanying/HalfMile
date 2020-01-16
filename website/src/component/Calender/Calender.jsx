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
import "./index.sass";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      pickerOpen: false
    };
  }
  render() {
    return (
      <div className="app">
        {/* <DateRangePicker
          startDate={this.state.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.state.endDate}
          endDateId="you_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          }
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        /> */}
        {/* <SingleDatePicker
          placeholder="mm/dd/yyy"
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="single-date"
        /> */}

        {/** Below is for DND datePick use only */}
        <ClickAwayListener onClickAway={this.toggleDayPicker}>
          <div>
            <Button onClick={this.toggleDayPicker}>Toggle DayPicker</Button>
            {this.state.pickerOpen && (
              <DayPickerRangeController
                className="day-picker"
                autoFocusEndDate={true}
                initialStartDate={this.state.startDate}
                endDate={this.state.endDate}
                endDateId="you_unique_end_date_id"
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                }
              />
            )}
          </div>
        </ClickAwayListener>
      </div>
    );
  }
  toggleDayPicker = () => {
    this.setState({ pickerOpen: !this.state.pickerOpen });
  };
}

export default Calendar;
