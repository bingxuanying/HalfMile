import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  google,
  Polyline
} from "react-google-maps";
import { compose } from "recompose";
import { connect } from "react-redux";
import * as planActions from "../../actions/planActions";
import * as stepActions from "../../actions/stepActions";
import "./Map.sass";

class Map extends Component {
  render() {
    const path = [this.props.home.location];

    const MyMapComponent = compose(
      withScriptjs,
      withGoogleMap
    )(props => (
      // Set Multiple Markers on the Map
      <GoogleMap
        defaultZoom={11}
        // auto zoom in/out goes here
        defaultCenter={{ lat: 34.0522342, lng: -118.2436849 }}
      >
        {/* home address */}
        <Marker id={0} key={0} position={this.props.home.location} />

        {this.props.cities.map((city, idx) => {
          path.push(city.location);

          return (
            <div>
              <Marker
                id={city.id}
                key={city.id}
                position={{ lat: city.location.lat, lng: city.location.lng }}
              />
              {/* lightgray - darkgray: interval = floor((hexdec_dark - hexdec_light) / this.props.cities.length) */}
              {/* color = "#" + stringfy(path.length * interval + lightgray) */}
              <Polyline path={path} options={{ strokeColor: "#FF0000" }} />
            </div>
          );
        })}
      </GoogleMap>
    ));

    const cities = this.props.cities;

    return (
      <MyMapComponent
        zoom={10}
        cities={cities}
        path={path}
        googleMapURL="https://maps.googleapis.com/maps/api"
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%", width: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      ></MyMapComponent>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.step.cities,
    home: state.plan[0].home
  };
};

const mapDispatchToProps = () => {
  return {
    reorderCity: stepActions.reorderCity
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Map);
