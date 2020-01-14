import React, { Component } from "react";
import Geosuggest from "react-geosuggest";
import "./SearchBarLoca.sass";
import AutoComplete from "react-google-autocomplete";
import Map from "../../Map/Map";
import { GoogleMap } from "react-google-maps";
import uuid from "uuid/v4";
import { connect } from "react-redux";
import * as planActions from "../../../actions/planActions";
import * as stepActions from "../../../actions/stepActions";

class SearchBarLoca extends Component {
  // const latValue = place.geometry.location.lat(),
  //   lngValue = place.geometry

  constructor() {
    super();

    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  onSuggestSelect(place) {
    if (place) {
      var location = place.gmaps.adr_address;
      var matches = /class="locality">(.*?)<\/span>/g.exec(location);
      if (matches.length > 1) {
        var cityName = matches[1];
      }

      if (
        this.props.cities.length === 0 &&
        cityName === this.props.homeAddress.name
      ) {
        this.props.updateError("The Same as Home Address");
      } else {
        var city = {
          id: uuid(),
          name: cityName,
          location: place.location
        };

        this.props.addCity(city);
      }
      this._geoSuggest.clear();
    }
  }

  render() {
    // in case no home address, bias based on LA
    var biasLat = this.props.homeAddress.location.lat
      ? this.props.homeAddress.location.lat
      : 34.0522342;
    var biasLng = this.props.homeAddress.location.lng
      ? this.props.homeAddress.location.lng
      : -118.2436849;

    return (
      <div className="search-bar-city">
        <Geosuggest
          ref={el => (this._geoSuggest = el)}
          className="geosuggest"
          placeholder="Let's go somewhere!"
          autoCorrect="off"
          spellCheck="false"
          onSuggestSelect={this.onSuggestSelect}
          location={new window.google.maps.LatLng(biasLat, biasLng)}
          radius={20}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.plan[0].home);
  return {
    homeAddress: state.plan[0].home,
    cities: state.step.cities
  };
};

const mapDispatchToProps = () => {
  return {
    addCity: stepActions.addCity,
    updateError: stepActions.updateError
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(SearchBarLoca);
