import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/Nav.jsx'
import Main from './main/Main.jsx'
import Tournament from './main/Tournament.jsx'
import GoogleMap from './main/GoogleMap.jsx'


class App extends React.Component {
    constructor(props){
      super(props);
      this.createTourn = this.createTourn.bind(this);
      this.socket = new WebSocket("ws://localhost:4000");
        this.state = {
          data: {
            tournamentName: "MarioCart Special",
            tournamentGameType: "MarioCart",
            tournamentLocation: "Garricks Head Pub",
            tournamentStart: "4:00pm",
            tournamentDate: "Dec 10, 2016",
            tournamentPlayerMax: 8,
            tournamentPlayerCurrent: 8,
            one: <GoogleMap />

          }
        }


}
createTourn(){
   this.setState({data: {one: <Tournament />}})
}


   render() {

      return (
      <div>
        <div>
          <Nav createTourn={this.createTourn} />
        </div>
        <div>
          <Main data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
