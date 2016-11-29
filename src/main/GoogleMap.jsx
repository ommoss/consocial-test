import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Map, {Marker, InfoWindow} from 'google-maps-react';
import NodeGeocoder from 'node-geocoder';
var options = {
  provider: 'google',
}
var geocoder = NodeGeocoder(options);

class GoogleMap extends React.Component {
     constructor(props){
      super(props);
      this.state = {
        google: "",
        selectedPlace: "LHL"
    }
  }

  render() {
    var data = this.props.data;
    console.log(data[0].location)
    return (
      <Map
        containerStyle = {{
          position: 'relative',
          width: '60vw',
          height: '100vh'
        }}
        google={window.google}
        zoom={14}
        centerAroundCurrentLocation = {true}>
        {data.map(function(object, i){
          var lat = 0;
          var lng = 0;
          geocoder.geocode(object.location, function(err, res) {
            console.log(res);
            console.log(err);
            lat = res.latitude;
            lng = res.longitude;
          });
          return(
            <Marker
            name= {object.name}
            postition={{lat: lat, lng: lng}}
            />
            )
        })}
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
