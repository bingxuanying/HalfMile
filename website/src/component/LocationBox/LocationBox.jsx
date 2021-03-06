import React, { Component, useState } from "react";
import SearchBarLoca from "./SearchBar/SearchBarLoca";
import DND from "../DND";
import ReactModal from "react-modal";
import "./LocationBox.sass";
import { text } from "@fortawesome/fontawesome-svg-core";
import { Modal } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import Tooltip from "@material-ui/core/Tooltip";
import { connect } from "react-redux";
import VisionBox from "./VisionBox";

class LocationBox extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  render() {
    const startCity = "Davis";
    return (
      <div className="locationbox-container">
        <div
          style={{
            marginLeft: "35px",
            padding: "2px"
          }}
        >
          <SearchBarLoca />
          <VisionBox />
          {/* <button onClick={this.toggleDiv}>+</button>
          <br />
          {!this.state.show && <Calendar />} */}
        </div>
        <div className="start-city">
          <div className="start-city-start">Start City:</div>
          <div className="start-city-city">{this.props.home.name}</div>
        </div>
        <div className="locationbox-manager">
          <DND />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.plan[0].home);
  return {
    home: state.plan[0].home
  };
};

export default connect(mapStateToProps)(LocationBox);
