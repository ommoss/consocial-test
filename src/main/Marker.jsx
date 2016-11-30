import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Marker from 'google-maps-react';
import NodeGeocoder from 'node-geocoder';
var options = {
  provider: 'google',
}
var geocoder = NodeGeocoder(options);

class Markers extends React.Component {
     constructor(props){
      super(props);
      this.state = {
        google: "",
        selectedPlace: "LHL",
        locations: []
    }
  }
  getLocation(){
    console.log(data[0].location);
  }
  componentDidMount(){
    getlocation()
  }
  render() {
    var data = this.state.locations;
    return (
       <div>
          {data.map(function(object, i){
            return(

              )
          })}
        </div>
    );
  }
}

export default Markers;