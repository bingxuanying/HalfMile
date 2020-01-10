import React, { Component } from "react";
import Geosuggest from "react-geosuggest";
import "./SearchBarLoca.sass";
import AutoComplete from "react-google-autocomplete";
import Map from "../Map/Map";
import { GoogleMap } from "react-google-maps";

class SearchBarLoca extends Component {
  // const latValue = place.geometry.location.lat(),
  //   lngValue = place.geometry

  constructor() {
    super();

    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  onSuggestSelect(place) {
    // var location = place.location;
    console.log(place);
    // console.log(location);
    // this.setState({
    //   mapPosition: {

    //   }
    // })
  }


  render() {
    return (
      <div className="search-bar-city">
        <Geosuggest className="geosuggest"
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
