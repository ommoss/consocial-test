import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Map, {Marker, InfoWindow} from 'google-maps-react';
import Markers from './Markers.jsx'
import geocoder from 'google-geocoder';
var geo = geocoder({
  key: 'AIzaSyAC0nJCMaQAZ0lJpLhrpWBsQ25itl5yQqg'
});

class GoogleMap extends React.Component {
     constructor(props){
      super(props);
      this.getLocation = this.getLocation.bind(this);
      this.state = {
        google: "",
        selectedPlace: "LHL",
        location: []
    }
  }
  getLocation(){
    var locations = [];
    var that = this;
    this.props.data.forEach(function(element){
        geo.find(element.location, function(err, res){
          var object = {
            id: element.id,
            title: element.title,
            lat: res[0].location.lat,
            lng: res[0].location.lng
          };
          // process response object
          locations.push(object)
          console.log(object)
        });
      if(locations.length === that.props.data.length){
      that.setState({location: locations})
      }
    })
  }
  shouldComponentUpdate(nextProps,nextState) {
    if(this.state.location !== nextState.location) {
      return true;
    }
    return false;
  }
  componentDidMount(){
  }

  render() {
    console.log(this.props.location, 'hello')
    var location = this.props.location;
    return (
      <div>
      <Map
        containerStyle = {{
          position: 'relative',
          width: '60vw',
          height: '100vh'
        }}
        classname ={'map'}
        google={window.google}
        zoom={14}
        centerAroundCurrentLocation = {true}>
        {location.map((object, index) => {
          console.log(object, 'test');
          return (
          <Marker
              key = {object.id}
              name = {object.title}
              position={{lat: object.lat, lng: object.lng}}
              />
            );
        })}
      </Map>
        </div>
    );
  }
}

export default GoogleMap;
