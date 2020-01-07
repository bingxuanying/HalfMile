import React, {Component, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
import Calendar from "react-calendar";
import { render } from "react-dom";

class datePicker extends Component{
  constructor(props){
    super(props);
    this.state ={
      startDate: null,
      endDate: null
    }
  }
  render(){
  return(
    <div className="App">
      <DateRangePicker 
        startDate={this.state.startDate}
        startDateId="your_unique_start_date_id"
        endDate={this.state.endDate}
        endDateId="you_unique_end_date_id"
        onDatesChange={({startDate, endDate}) => this.setState({startDate, endDate})}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => this.setState({focusedInput})}
      />
    </div>
  );
  }
}


export default datePicker;