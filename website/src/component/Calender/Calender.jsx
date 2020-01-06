import React, {Component, useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
// import 'react-dates/lib/css/bootstrap.min.css';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
import Calendar from "react-calendar";

// import {FormGroup, ControlLabel, HelpBlock, datePicker} from "react-bootstrap-date-picker";

// var DatePicker = require("react-bootstrap-date-picker");
 
// var App = React.createClass({
//   getInitialState: function(){
//     var value = new Date().toISOString();
//     return {
//       value: value
//     }
//   },
//   handleChange: function(value, formattedValue) {
//     this.setState({
//       value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
//       formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
//     });
//   },
//   componentDidUpdate: function(){
//     // Access ISO String and formatted values from the DOM.
//     var hiddenInputElement = document.getElementById("example-datepicker");
//     console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
//     console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
//   },
//   render: function(){
//     return (<FormGroup>
//       <ControlLabel>Label</ControlLabel>
//       <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
//       <HelpBlock>Help</HelpBlock>
//     </FormGroup>);
//   }
// });
// class datePicker extends Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       startDate: null,
//       endDate: null
//     }
//   }
// }

// export default datePicker;