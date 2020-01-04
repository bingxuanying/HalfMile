import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withGoogleMap(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
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
