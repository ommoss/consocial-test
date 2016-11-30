import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Map, {Marker, InfoWindow} from 'google-maps-react';
import geocoder from 'google-geocoder';
var geo = geocoder({
  key: 'AIzaSyAC0nJCMaQAZ0lJpLhrpWBsQ25itl5yQqg'
});

class GoogleMap extends React.Component {
     constructor(props){
      super(props);
      this.onMarkerClick = this.onMarkerClick.bind(this);
      this.onMapClicked = this.onMapClicked.bind(this);
      this.state = {
        google: "",
        selectedPlace: "LHL",
        location: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    var location = this.props.location;
    return (
      <div id = 'map'>
      <Map
        containerStyle = {{
          position: 'relative'
        }}
        google={window.google}
        zoom={14}
        centerAroundCurrentLocation = {true}
        onClick={this.onMapClicked}>
        {location.map((object, index) => {
          return (
          <Marker
              key = {object.id}
              name = {object.title}
              position={{lat: object.lat, lng: object.lng}}
              onClick={this.onMarkerClick}
              />
            );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
        </div>
    );
  }
}

export default GoogleMap;
