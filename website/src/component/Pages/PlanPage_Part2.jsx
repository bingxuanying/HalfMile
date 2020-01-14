import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { TripOverview } from "../TripOverview";
import "./PlanPage.sass";
import { SearchResult } from "../SearchResult";
import {
  TextField,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  FormControl
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { NationParkQ } from "../Api";
import Map from "../Map/Map";
// Redux
import { connect } from "react-redux";
import * as resultActions from "../../actions/resultActions";

class PlanPage_Part2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // keyWord here is only for test, we will get it from Redux
      keyWord: ""
    };
  }
  handleInput = event => {
    event.preventDefault();
    this.setState({ keyWord: event.target.value });
    this.props.updateKeyword(event.target.value);
  };

  searchClick = () => {
    // NationParkQ({ key: this.props.keyword, stateCode: "CA" });
    this.props.fetchData({ key: this.props.keyword, stateCode: "CA" })
  };
  render() {
    return (
      <div className="planpage-containter">
        <div className="planpage-cover">
          <TripOverview base="city" />
        </div>
        <div className="planpage-main">
          {/* sdie bar section */}
          <div className="planpage-sidebar">
            <div className="planpage-sidebar-searchbar">
              <FormControl>
                <InputLabel>Enter Place U want to go</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={"text"}
                  value={this.state.keyWord}
                  onChange={this.handleInput}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={this.searchClick}
                        onClick={() => this.props.fetchData({ key: this.props.keyword, stateCode: "CA" })}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="planpage-sidebar-menu">
              <SearchResult type="activity" />
            </div>
          </div>
          {/* map section */}
          <div className="planpage2-map">
            <Map />
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
    resultList: state.result.resultList
  };
};

const mapDispatchToProps = () => {
  return {
    updateKeyword: resultActions.updateKeyword,
    fetchData: resultActions.fetchData
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PlanPage_Part2);
// export default PlanPage_Part2;