import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import "./Map.css";

const MyMapComponent = withGoogleMap(props => (
  <GoogleMap
    // 5: state names; 8: city names; 10: one city name;
    // 13: city name and vague st; 15: city street view
    defaultZoom={11}
    defaultCenter={{ lat: 34.0522342, lng: -118.2436849 }}
  >
    <Marker position={{ lat: 34.0522342, lng: -118.2436849 }} />
  </GoogleMap>
));

class Map extends Component {
  render() {
    return (
      <MyMapComponent
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    );
  }
}

export default Map;
