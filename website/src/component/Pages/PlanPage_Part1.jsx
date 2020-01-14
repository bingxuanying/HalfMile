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

class PlanPage_Part1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoBarShow: true,

    };
  }



  render() {
    console.log(this.props.err);
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
        {this.state.infoBarShow && (
          <InfoBar
            open={this.state.infoBarShow}
            onClose={this.closeInfoBar}
            autoHideDuration={5500}
            message={this.props.err}
            type="error"
          />
        )}
      </div>
    );
  }
  closeInfoBar = () => {
    this.setState({ infoBarShow: false });
  }
}

const mapStateToProps = state => {
  // console.log(state.plan[0].home);
  return {
    section: state.step.section,
    err: state.step.err,
    InfoBar: state.state.InfoBar
  };
};

const mapDispatchToProps = () => {
  return {
    nextPage: stepActions.nextPage,

  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PlanPage_Part1);
