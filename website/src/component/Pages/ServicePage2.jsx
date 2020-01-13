import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import HeaderContainer from "../Header/HeaderContainer";
import { TripOverview } from "../TripOverview";
import "./ServicePage.sass";
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
import SearchBarLoca from "../LocationBox/SearchBar/SearchBarLoca";
import Map from "../Map/Map";
// Redux
import { connect } from "react-redux";
import * as resultActions from "../../actions/resultActions";

class ServicePage2 extends Component {
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
    NationParkQ({ key: this.props.keyword, stateCode: "CA" });
    // this.props.fetchData({ key: this.props.keyword, stateCode: "CA" })
  };
  render() {
    return (
      <div className="servicepage-containter">
        <div className="servicepage-cover">
          <TripOverview base="city" />
        </div>
        <div className="servicepage-main">
          {/* sdie bar section */}
          <div className="servicepage-sidebar">
            <div className="servicepage-sidebar-searchbar">
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
                        onClick={this.searchClick}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="servicepage-sidebar-menu">
              <SearchResult type="flight" />
            </div>
          </div>
          {/* map section */}
          <div className="servicepage2-map">
            <Map />
          </div>

          {/* Overflow Btn - position: absolute */}
          <div className="servicepage-floatWindow"></div>
          <button className="servicepage-pre-btn page-btn-bg">
            <FontAwesomeIcon className="page-btn" icon={faCaretLeft} />
          </button>
          <button className="servicepage-next-btn page-btn-bg">
            <FontAwesomeIcon className="page-btn" icon={faCaretRight} />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.plan[0].home);
  return {
    keyword: state.result.keyword
  };
};

const mapDispatchToProps = () => {
  return {
    updateKeyword: resultActions.updateKeyword,
    fetchData: resultActions.fetchData
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ServicePage2);
