import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import places from "./places.json";
import { compose, withProps, withStateHandlers } from "recompose";
import "./Map.css";

// const MyMapComponent = compose(withScriptjs, withGoogleMap)(props => (
//   <GoogleMap
//     // 5: state names; 8: city names; 10: one city name;
//     // 13: city name and vague st; 15: city street view
//     defaultZoom={11}
//     defaultCenter={{ lat: 29.5, lng: -95 }}>
//     {props.markers.map(marker => {
//         const onClick = props.onClick.bind(this, marker)
//         return (
//           <Marker
//             key={marker.id}
//             onClick={onClick}
//             position={{ lat: marker.latitude, lng: marker.longitude }}
//           >
//             {props.selectedMarker === marker &&
//               <InfoWindow>
//                 <div>
//                   {marker.shelter}
//                 </div>
//               </InfoWindow>}
//             }
//           </Marker>
//         )
//       })}
//     {/* <Marker position={{ lat: 34.0522342, lng: -118.2436849 }} /> */}
//   </GoogleMap>

// ));

// class Map extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       shelters: [],
//       selectedMarker: false
//     }
//   }
//   componentDidMount() {
//     fetch("https://api.harveyneeds.org/api/v1/shelters?limit=20")
//       .then(r => r.json())
//       .then(data => {
//         this.setState({ shelters: data.shelters })
//       })
//   }
//   handleClick = (marker, event) => {

//     this.setState({ selectedMarker: marker })
//   }

//   render() {
//     return (
//       <MyMapComponent
//         selectedMarker={this.state.selectedMarker}
//         markers={this.state.shelters}
//         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
//         onClick={this.handleClick}
//         loadingElement={<div style={{ height: "100%" }} />}
//         containerElement={<div style={{ height: "100%" }} />}
//         mapElement={<div style={{ height: "100%" }} />}
//       />

//     );
//   }
// }

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: "100%", width: "100%" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  withStateHandlers(
    props => ({
      infoWindows: props.places.map(p => {
        return { isOpen: false };
      })
    }),
    {
      onToggleOpen: ({ infoWindows }) => selectedIndex => ({
        infoWindows: infoWindows.map((iw, i) => {
          iw.isOpen = selectedIndex === i;
          return iw;
        })
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 34.0522342, lng: -118.2436849 }}
  >
    >
    {props.places &&
      props.places.map((place, i) => {
        let lat = parseFloat(place.latitude, 10);
        let lng = parseFloat(place.longitude, 10);
        return (
          <Marker
            id={place.id}
            key={place.id}
            position={{ lat: lat, lng: lng }}
            title="Click to zoom"
            onClick={props.onToggleOpen.bind(this, i)}
          >
            {props.infoWindows[i].isOpen && (
              <InfoWindow onCloseClick={props.onToggleOpen.bind(i)}>
                <div>{place.name}</div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
  </GoogleMap>
));

class Map extends Component {
  render() {
    return (
      <MyMapComponent
        center={{ lat: 40.6451594, lng: -74.0850826 }}
        zoom={10}
        places={places}
      />
    );
  }
}

export default Map;
