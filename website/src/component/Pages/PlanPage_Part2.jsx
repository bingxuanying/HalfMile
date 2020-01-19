import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { TripOverview } from "../TripOverview";
import "./PlanPage.sass";
import { SearchResult } from "../SearchResult";
import {
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  FormControl
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Map from "../Map/Map";
// Redux
import { connect } from "react-redux";
import * as resultActions from "../../actions/resultActions";
import * as stepActions from "../../actions/stepActions";

class PlanPage_Part2 extends Component {
  render() {
    window.onload = () => {
      let pack = {
        keyword: this.props.keyword,
        stateCode: "CA"
      };
      this.props.fetchData(pack);
    };
    // follow 2 is to change inline style
    var searchResultWidth;
    var mapWidth;
    var tripOverType;
    switch (this.props.section) {
      case "airline":
        searchResultWidth = "650px";
        mapWidth = "calc(100% - 650px)";
        tripOverType = "city";
        break;
      case "activity":
        searchResultWidth = "300px";
        mapWidth = "calc(100% - 300px)";
        tripOverType = "day";
        break;
      case "hotel":
        searchResultWidth = "550px";
        mapWidth = "calc(100% - 550px)";
        tripOverType = "city";
        break;
      default:
        break;
    }
    return (
      <div className="planpage-containter">
        <div className="planpage-cover">
          <TripOverview base={tripOverType} />
        </div>
        <div className="planpage-main">
          {/* sdie bar section */}
          <div
            className="planpage-sidebar"
            style={{ width: searchResultWidth }}
          >
            <div className="planpage-sidebar-searchbar">
              <FormControl>
                <InputLabel>Enter Place U want to go</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={"text"}
                  onChange={e => this.props.updateKeyword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={this.searchClick}
                        onClick={() =>
                          this.props.fetchData({
                            keyworyd: this.props.keyword,
                            stateCode: "CA"
                          })
                        }
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="planpage-sidebar-menu">
              <SearchResult type={this.props.section} />
            </div>
          </div>
          {/* map section */}
          <div className="planpage2-map" style={{ width: mapWidth }}>
            <Map style={{ width: "100%" }} />
          </div>

          {/* Overflow Btn - position: absolute */}
          <div className="planpage-floatWindow"></div>
          <button
            className="planpage-pre-btn page-btn-bg"
            onClick={() => this.props.prePage(this.props.days.length - 1)}
          >
            <FontAwesomeIcon className="page-btn" icon={faCaretLeft} />
          </button>
          <button
            className="planpage-next-btn page-btn-bg"
            onClick={() => this.props.nextPage(this.props.days.length - 1)}
          >
            <FontAwesomeIcon className="page-btn" icon={faCaretRight} />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    keyword: state.result.keyword,
    resultList: state.result.resultList,
    section: state.step.section,
    days: state.plan
  };
};

const mapDispatchToProps = () => {
  return {
    updateKeyword: resultActions.updateKeyword,
    fetchData: resultActions.fetchData,
    nextPage: stepActions.nextPage,
    prePage: stepActions.prePage
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PlanPage_Part2);
