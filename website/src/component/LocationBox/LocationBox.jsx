import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBarDemo";
import DND from "../DND/DND";
import "./LocationBox.css";

class LocationBox extends Component {
  render() {
    return (
      <div className="locationbox-container">
        <div
          style={{
            padding: "2px"
          }}
        >
          <SearchBar />
        </div>
        <div className="locationbox-manager">
          <DND />
        </div>
      </div>
    );
  }
}

export default LocationBox;
