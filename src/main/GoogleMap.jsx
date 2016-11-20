import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Map, {Marker, InfoWindow} from 'google-maps-react'

class GoogleMap extends React.Component {
     constructor(props){
      super(props);
      this.state = {
        google: "",
        selectedPlace: "LHL"
    }
  }

  render() {
    return (
      <Map
        google={window.google}
        zoom={14}>
        <InfoWindow
          onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleMap;
