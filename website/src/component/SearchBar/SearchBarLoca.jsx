import React, { Component } from "react";
import Geosuggest from "react-geosuggest";
import "./SearchBarLoca.sass";

class SearchBarLoca extends Component {
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
      <div className="search-bar-city">
        <Geosuggest
          placeholder="Let's go somewhere!"
          autoCorrect="off"
          spellCheck="false"
          onSuggestSelect={this.onSuggestSelect}
          location={new window.google.maps.LatLng(34.0522342, -118.2436849)}
          radius={20}
        />
      </div>
    );
  }
}

export default SearchBarLoca;
