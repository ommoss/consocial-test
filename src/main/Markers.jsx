import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Map, {Marker, InfoWindow} from 'google-maps-react';
import geocoder from 'google-geocoder';
var geo = geocoder({
  key: 'AIzaSyAC0nJCMaQAZ0lJpLhrpWBsQ25itl5yQqg'
});

class Markers extends React.Component {
     constructor(props){
      super(props);
      this.getLocation = this.getLocation.bind(this);
      this.state = {
        locations: []
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
        });
      that.setState({locations: locations})
    })
  }
  componentDidMount(){
   this.getLocation();
  }
  render() {
   var data = this.state.locations;
      return (
        <div>
          {data.map(function(object, i){
            console.log(object)
            return(

              <Marker
              google={window.google}
              key = {object.id}
              name = {object.title}
              postition= {{lat: object.lat, lng: object.lng}}
              />
              )
          })}
        </div>
    );
  }
}

export default Markers;