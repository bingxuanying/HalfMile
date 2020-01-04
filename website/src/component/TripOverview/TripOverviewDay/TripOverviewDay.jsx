import React, { Component } from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import "./index.sass";
class TripOverviewDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
      day: 1,
      isChecked: false,
      isStart: true,
      isEnd: true,
      startCity: "davis",
      endCity: "davis"
    };
  }

  render() {
    this.getProps();
    var circleSize;
    (this.state.startCity == this.state.endCity) ?
      circleSize = 24 : circleSize = 40;
    const dayInfo = <div className="trip-overview-day-routine d-inline-block text-truncate">
      <p className="mb-1">Hotel: Aoligei</p>
      <p className="mb-1">Transport: Drive</p>
      <p className="mb-1">Activity: Funxxxxxxxxxx123</p>
    </div>
    return (
      <div className="trip-overview-day">
        <div className="trip-overview-day-daydisplay">Day{this.state.day}</div>
        <div className="trip-overview-day-dashline">
          <div className="vertical-line"></div>
        </div>
        <div className="trip-overview-day-city">
          <div className="trip-overview-day-city-graph">
            {(this.state.isStart) ? <div className="left-line-empty"></div>
              : <div className="left-line" />}
            <div className="trip-overview-day-city-graph-circle">
              {(this.state.isChecked) ?
                <CheckCircleOutlineIcon style={{ fontSize: circleSize, color: 'green' }} /> :
                <RadioButtonUncheckedIcon style={{ fontSize: circleSize }} />}
            </div>
            {(this.state.isEnd) ? <div className="right-line-empty"></div>
              : <div className="right-line" />}
          </div>
          <div className="trip-overview-day-city-text">{this.state.endCity}</div>
        </div>
        {dayInfo}
      </div>
    );
  }
  getProps = () => {
    if (this.props.isSelected) { this.state.isSelected = true };
    this.state.day = this.props.day;
    this.state.isChecked = this.props.isChecked;
    this.state.isEnd = this.props.isEnd;
    this.state.isStart = this.props.isStart;
    this.state.startCity = this.props.startCity;
    this.state.endCity = this.props.endCity;
  }
}

export default TripOverviewDay;
