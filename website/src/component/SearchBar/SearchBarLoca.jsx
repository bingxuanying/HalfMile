import React, { Component } from "react";
import Geosuggest from "react-geosuggest";
import AutoComplete from "react-google-autocomplete";
import Map from "../Map/Map";
import "./SearchBarLoca.css";

class SearchBarLoca extends Component {
  const latValue = place.geometry.location.lat(),
    lngValue = place.geometry

  constructor() {
    super();

    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  onSuggestSelect(place) {
    // var location = place.location;
    alert("HEllo")
    // console.log(location);
    this.setState({
      mapPosition: {

      }
    })
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

export default SearchBarLoca;
