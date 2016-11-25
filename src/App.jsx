import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/Nav.jsx';
import Main from './main/Main.jsx';
import Tournament from './main/Tournament.jsx'
import FindTournament from './main/FindTournament.jsx';
import GoogleMap from './main/GoogleMap.jsx';
import Footer from './footer/Footer.jsx';

class App extends React.Component {
    constructor(props){
      super(props);
      this.findTourn = this.findTourn.bind(this);
      this.createTourn = this.createTourn.bind(this);
      this.backHome = this.backHome.bind(this);
      this.updateFromDatabase = this.updateFromDatabase.bind(this);

      this.socket = new WebSocket("https://consocial-server.herokuapps.com");
      this.state = {
          data: {
            tournaments: [],
            tournamentName: "MarioCart Special",
            tournamentGameType: "MarioCart",
            tournamentLocation: "Garricks Head Pub",
            tournamentStart: "4:00pm",
            tournamentDate: "Dec 10, 2016",
            tournamentPlayerMax: 8,
            tournamentPlayerCurrent: 8,
            one: <Main findTourn = {this.findTourn} createTourn = {this.createTourn} backHome = {this.backHome} />
          }
      }
  }
updateFromDatabase () {
}
findTourn(){
  this.setState({data: {one: <FindTournament data = {this.state.data} />}});
  this.updateFromDatabase();
}

createTourn(){
  this.setState({data: {one: <Tournament />}});
}

backHome(){
  this.setState({data: {one: <Main findTourn = {this.findTourn} createTourn = {this.createTourn} backHome = {this.backHome} />}});
}
componentDidMount(){
  this.socket.onopen = function (event) {
      console.log("Connected to Server.");
    };
}

   render() {

      return (
      <div>
        <div>
          <Nav backHome={this.backHome} />
        </div>
        <div id="maindiv">
          {this.state.data.one}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
