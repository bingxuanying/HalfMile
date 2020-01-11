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
    // var location = place.location;
    // console.log(place);
    // console.log(location);
    // this.setState({
    //   mapPosition: {

    //   }
    // })

    if (place) {
      var location = place.gmaps.adr_address;
      var matches = /class="locality">(.*?)<\/span>/g.exec(location);
      if (matches.length > 1) {
        var cityName = matches[1];
      }

      var city = {
        id: uuid(),
        name: cityName,
        location: place.location
      };

      this.props.addCity(city);
    }
  }

  render() {
    return (
      <div className="search-bar-city">
        <Geosuggest
          className="geosuggest"
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

const mapStateToProps = state => {
  // console.log(state.plan[0].home);
  return {
    plan: state.plan
  };
};

const mapDispatchToProps = () => {
  return {
    addCity: stepActions.addCity
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(SearchBarLoca);
