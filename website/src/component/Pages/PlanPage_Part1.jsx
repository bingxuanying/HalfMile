import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import LocationBox from "../LocationBox/LocationBox";

import Map from "../Map/Map";
import { connect } from "react-redux";
import * as stepActions from "../../actions/stepActions";
import * as stateActions from "../../actions/stateActions";
import "./PlanPage.sass";
import InfoBar from "../InfoBar";
import VisionBox from "../LocationBox/VisionBox";

class PlanPage_Part1 extends Component {
  render() {
    return (
      <div className="planpage-containter">
        <div
          style={{ height: "80px", width: "100%", backgroundColor: "white" }}
        ></div>
        {/* Main */}
        <div className="planpage-main">
          {/* map section */}
          <div className="planpage1-map">
            <Map />
          </div>

          {/* Overflow - position: absolute */}
          <LocationBox />
          {/* <button className="planpage-pre-btn page-btn-bg">
            <FontAwesomeIcon className="page-btn" icon={faCaretLeft} />
          </button>
          <button className="planpage-next-btn page-btn-bg">
            <FontAwesomeIcon className="page-btn" icon={faCaretRight} />
          </button> */}
          <button
            className="section-btn-bg"
            onClick={() => {
              this.props.nextPage();
            }}
          >
            <span>Next Section</span>
          </button>
        </div>
        {this.props.InfoBar && (
          <InfoBar
            open={this.props.InfoBar}
            onClose={() => this.props.turnOffInfoBar()}
            autoHideDuration={2000}
            message={this.props.err}
            type="error"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    section: state.step.section,
    err: state.step.err,
    InfoBar: state.state.InfoBar
  };
};

const mapDispatchToProps = () => {
  return {
    nextPage: stepActions.nextPage,
    turnOffInfoBar: stateActions.turnOffInfoBar
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PlanPage_Part1);
