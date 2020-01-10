import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  Polyline
} from "react-google-maps";
import places from "./places.json";
import { compose, withProps, withStateHandlers } from "recompose";
import "./Map.css";


const MyMapComponent = compose(withScriptjs,withGoogleMap)(props => (
  // Set Multiple Markers on the Map
  <GoogleMap 
    defaultZoom={11} 
    defaultCenter={{ lat: 34.0522342, lng: -118.2436849 }}
  >
    {props.places && props.places.map((place, i) => {
        let lat = parseFloat(place.latitude, 10);
        let lng = parseFloat(place.longitude, 10);
        let path = [{ lat: 38.5449065, lng: -121.7405167 }, { lat: 37.7749295, lng: -122.4194155 }, { lat: 34.0522342, lng: -118.2436849}];
        return (
          <div>
            <Marker id={place.id} key={place.id} position={{ lat: lat, lng: lng }}/>  
            <Polyline path={path} options={{ strokeColor: "#FF0000 " }}/>
          </div>    
        );
      })}
    
  </GoogleMap>
));

class Map extends Component {
  path = [
    { lat: 38.5449065, lng: -121.7405167 },
    { lat: 37.7749295, lng: -122.4194155 }
  ];
  render() {
    return (
      <MyMapComponent
        zoom={10}
        places={places}
        googleMapURL="https://maps.googleapis.com/maps/api"
        loadingElement= {<div style={{ height: `100%` }} />}
        containerElement= {<div style={{ height: "100%", width: "100%" }} />}
        mapElement= {<div style={{ height: "100%" }} />}
      >
        <Polyline path={this.path} options={{ strokeColor: "#FF0000 " }}/>  
      </MyMapComponent>
          
    );
  }
}

export default Map;
