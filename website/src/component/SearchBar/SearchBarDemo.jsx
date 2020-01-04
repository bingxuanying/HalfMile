import React, { Component } from "react";
import Geosuggest from "react-geosuggest";
import "./SearchBarDemo.css";

class SearchBarDemo extends Component {
  constructor() {
    super();

    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  onSuggestSelect(place) {
    // var location = place.location;
    console.log(place);
    // console.log(location);
  }

  render() {
    return (
      <div>
        <Geosuggest
          placeholder="Let's go somewhere!"
          onSuggestSelect={this.onSuggestSelect}
          location={new window.google.maps.LatLng(34.0522342, -118.2436849)}
          radius={20}
        />
      </div>
    );
  }
}

export default SearchBarDemo;
