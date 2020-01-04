import React, { Component } from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import "./index.sass";
/// Prop: day:int
///  isChecked: bool
///  
///
///
class TripOverviewDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 1,
      isChecked: false,
      isStart: true,
      isEnd: true,
      location: "davis"
    };
  }

  render() {
    this.getProps();
    console.log(this.state.isStart);
    console.log(this.state.isEnd);

    return (
      <div className="trip-overview-day">
        <div className="trip-overview-day-daydisplay">Day{this.state.day}</div>
        <div className="trip-overview-day-dashline">
          <div className="vertical-line"></div>
        </div>
        <div className="trip-overview-day-city">
          <div className="trip-overview-day-city-graph">
            {(this.state.isStart) ? <div className="left-line-empty"></div> : <div className="left-line" />}
            <div className="trip-overview-day-city- graph-circle">
              {(this.state.isChecked) ? <CheckCircleOutlineIcon style={{ fontSize: 40 }} /> :
                <RadioButtonUncheckedIcon style={{ fontSize: 40 }} />}
            </div>
            {(this.state.isEnd) ? <div className="right-line-empty"></div> : <div className="right-line" />}
          </div>
          <div className="trip-overview-day-city-text">Davis</div>
        </div>
        <div className="trip-overview-day-routine">Hotel: Aoligei Dajiudian</div>
      </div>
    );
  }
  getProps = () => {
    this.state.day = this.props.day;
    this.state.isChecked = this.props.isChecked;
    this.state.isEnd = this.props.isEnd;
    this.state.isStart = this.props.isStart;
    this.state.location = this.props.location;
  }
}

export default TripOverviewDay;
