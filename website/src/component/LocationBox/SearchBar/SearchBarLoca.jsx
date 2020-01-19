import React, { Component } from "react";
import Geosuggest from "react-geosuggest";
import "./SearchBarLoca.sass";
import AutoComplete from "react-google-autocomplete";
import Map from "../../Map/Map";
import { GoogleMap } from "react-google-maps";
import uuid from "uuid/v4";
import moment from "moment";
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

      let lastIdx = this.props.cities.length - 1;

      if (
        this.props.cities.length === 0 &&
        cityName === this.props.homeAddress.name
      ) {
        this.props.updateError("The Same as Home Address");
      } else if (lastIdx >= 0 && cityName === this.props.cities[lastIdx].name) {
        this.props.updateError("repeated city");
      } else {
        var city = {
          id: uuid(),
          name: cityName,
          location: place.location,
          // !!!BUG: what if the first flight the client takes is overnight
          startDate:
            this.props.cities.length === 0
              ? this.props.initStartDate
              : this.props.cities[this.props.cities.length - 1].endDate,
          endDate:
            this.props.cities.length === 0
              ? moment(this.props.initStartDate).add(1, "days")
              : moment(
                  this.props.cities[this.props.cities.length - 1].endDate
                ).add(1, "days"),
          isCalendar: false
        };

        this.props.addCity(city);
      }
      this._geoSuggest.clear();
    }
  }

  render() {
    // in case no home address, bias based on LA
    var bias = () => {
      var cities = this.props.cities;
      var homeAddress = this.props.homeAddress;
      if (cities.length !== 0) {
        return cities[cities.length - 1].location;
      } else if (homeAddress.location.lat && homeAddress.location.lng) {
        return homeAddress.location;
      } else {
        return {
          lat: 34.0522342,
          lng: -118.2436849
        };
      }
    };

    return (
      <div className="search-bar-city">
        <Geosuggest
          ref={el => (this._geoSuggest = el)}
          className="geosuggest"
          placeholder="Let's go somewhere!"
          autoCorrect="off"
          spellCheck="false"
          onSuggestSelect={this.onSuggestSelect}
          location={new window.google.maps.LatLng(bias.lat, bias.lng)}
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
    initStartDate: state.plan[0].startDate,
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
