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
          //   initialValue="Hamburg"
          onSuggestSelect={this.onSuggestSelect}
          location={new window.google.maps.LatLng(53.558572, 9.9278215)}
          radius={20}
        />
      </div>
    );
  }
}

export default SearchBarDemo;
