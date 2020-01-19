import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

import { connect } from "react-redux";
import * as planActions from "../../actions/planActions";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null
    };
  }
  render() {
    return (
      <div className="App" style={{ position: "relative", zIndex: 100 }}>
        {/* <DateRangePicker
                    startDate={this.state.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={this.state.endDate}
                    endDateId="you_unique_end_date_id"
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                /> */}
        <SingleDatePicker
          placeholder="mm/dd/yyy"
          date={this.props.startDate}
          onDateChange={date => this.props.updateInitStartDate(date)}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="single-date"
          numberOfMonths={1}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    startDate: state.plan[0].startDate
  };
};

const mapDispatchToProps = () => {
  return {
    updateInitStartDate: planActions.updateInitStartDate
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Calendar);
