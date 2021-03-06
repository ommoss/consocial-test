import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/Nav.jsx';
import Main from './main/Main.jsx';
import Tournament from './main/Tournament.jsx'
import FindTournament from './main/FindTournament.jsx';
import GoogleMap from './main/GoogleMap.jsx';
import Footer from './footer/Footer.jsx';
import TournamentDisplay from './main/Tournamentdisplay.jsx';
import geocoder from 'google-geocoder';
var geo = geocoder({
  key: 'AIzaSyAC0nJCMaQAZ0lJpLhrpWBsQ25itl5yQqg'
});
class App extends React.Component {
    constructor(props){
      super(props);
      this.findTourn = this.findTourn.bind(this);
      this.createTourn = this.createTourn.bind(this);
      this.backHome = this.backHome.bind(this);
      this.updateFromDatabase = this.updateFromDatabase.bind(this);


      this.state = {
          data: {
            one: <Main findTourn = {this.findTourn} createTourn = {this.createTourn} />
          },
          tournaments:[],
          location: []
      }
  }
updateFromDatabase () {
  var that = this;
  $.ajax({
    type: "GET",
    url: "/tournaments",
    dataType: 'json'

  }).done((response) => {
    this.setState({tournaments: response.test});
    var locations = [];
    this.state.tournaments.forEach(function(element){
        geo.find(element.location, function(err, res){
          var object = {
            id: element.id,
            title: element.title,
            lat: res[0].location.lat,
            lng: res[0].location.lng
          };
          // process response object
          locations.push(object)
      if(locations.length === that.state.tournaments.length){
      that.setState({location: locations})
      }
        });
    })
  });
}
  // getLocation(){

  // }

// displayTournamentObject(){
//   // console.log(this.state);
//   this.setState({tournaments: [this.state]});
// }


findTourn(){
  this.setState({data: {one: <FindTournament location = {this.state.location} data = {this.state.tournaments} />}});
}

createTourn(){
  this.setState({data: {one: <Tournament created = {this.backHome} backHome = {this.backHome}/>}});
  //this.updateUsers();
}

backHome(){
  this.updateFromDatabase();
  this.setState({data: {one: <Main findTourn = {this.findTourn} createTourn = {this.createTourn} backHome = {this.backHome} />}});
}

componentDidMount(){
  this.updateFromDatabase();
  //this.getLocation();
}

  render() {
    return (
      <div>
        <Nav backHome={this.backHome} />
        {this.state.data.one}
        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;
