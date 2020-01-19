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

class PlanPage_Part2 extends Component {
  render() {
    window.onload = () => {
      let pack = {
        keyword: this.props.keyword,
        stateCode: "CA"
      };
      this.props.fetchData(pack);
    };
    var searchResultWidth;
    var mapWidth;
    switch (this.props.section) {
      case "airline":
        searchResultWidth = "650px";
        mapWidth = "calc(100%-650px)"
        break;
      case "activities":
        searchResultWidth = "300px";
        mapWidth = "calc(100%-300px)"
        break;
      case "hotel":
        searchResultWidth = "550px";
        mapWidth = "calc(100%-550px)"
        break;
      default:
        break;
    }
    return (
      <div className="planpage-containter">
        <div className="planpage-cover">
          <TripOverview base="city" />
        </div>
        <div className="planpage-main">
          {/* sdie bar section */}
          <div className="planpage-sidebar" style={{ width: searchResultWidth }}>
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
          <div className="planpage2-map" style={{ width: mapWidth }} >
            <Map style={{ width: "100%" }} />
          </div>

          {/* Overflow Btn - position: absolute */}
          <div className="planpage-floatWindow"></div>
          <button className="planpage-pre-btn page-btn-bg">
            <FontAwesomeIcon className="page-btn" icon={faCaretLeft} />
          </button>
          <button className="planpage-next-btn page-btn-bg">
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
    section: state.step.section
  };
};

const mapDispatchToProps = () => {
  return {
    updateKeyword: resultActions.updateKeyword,
    fetchData: resultActions.fetchData
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PlanPage_Part2);
