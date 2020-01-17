import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  Polyline
} from "react-google-maps";
import { compose } from "recompose";
import { connect } from "react-redux";
import * as stepActions from "../../actions/stepActions";
import "./Map.sass";
import { icons } from "react-icons/lib/cjs";

class Map extends Component {
  render() {
    const path = [this.props.home.location];

    const MyMapComponent = compose(
      withScriptjs,
      withGoogleMap
    )(mapProps => (
      <GoogleMap
        ref={map => (this._map = map)}
        onTiltChanged={() => {
          var bounds = this._map.getBounds();

          this.props.cities.map(city => {
            bounds.extend(
              new window.google.maps.LatLng(
                city.location.lat,
                city.location.lng
              )
            );
          });

          var test = this._map.fitBounds(bounds);
          console.log(test);
        }}
        defaultZoom={10}
        defaultCenter={this.props.home.location}
      >
        {/* home address */}
        <Marker
          id={0}
          key={0}
          position={this.props.home.location}
          icon={{
            url: "https://img.icons8.com/dusk/50/000000/order-delivered.png"
          }}
        />

        {this.props.cities.map((city, idx) => {
          path.push(city.location);

          return (
            <div>
              {/* Marker for Cities */}
              <Marker
                id={city.id}
                key={city.id}
                position={{ lat: city.location.lat, lng: city.location.lng }}
                icon={{
                  url: "https://img.icons8.com/bubbles/50/000000/building.png"
                }}
              />
              {/* lightgray - darkgray: interval = floor((hexdec_dark - hexdec_light) / this.props.cities.length) */}
              {/* color = "#" + stringfy(path.length * interval + lightgray) */}
              <Polyline
                path={path}
                options={{
                  strokeColor: "#ff6f5e",
                  strokeOpacity: 1.0,
                  strokeWeight: 2
                }}
              />
            </div>
          );
        })}
      </GoogleMap>
    ));

    const cities = this.props.cities;

    return (
      <MyMapComponent
        zoom={10}
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
