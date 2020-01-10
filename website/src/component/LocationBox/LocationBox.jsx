import React, { Component, useState } from "react";
import SearchBar from "./SearchBar/SearchBarLoca";
import DND from "../DND/DND";
import ReactModal from "react-modal";
import "./LocationBox.css";
import Calendar from "../Calender/Calender";
import { text } from "@fortawesome/fontawesome-svg-core";
import { Modal } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";

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
    return (
      <div className="locationbox-container">
        <div
          style={{
            padding: "2px"
          }}
        >
          <SearchBar />
          {/* <button onClick={this.toggleDiv}>+</button>
          <br />
          {!this.state.show && <Calendar />} */}
        </div>
        <div className="locationbox-manager">
          <DND />
        </div>
      </div>
    );
  }
}

export default LocationBox;
