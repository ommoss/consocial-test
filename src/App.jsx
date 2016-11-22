import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/Nav.jsx';
import Main from './main/Main.jsx';
import Tournament from './main/Tournament.jsx'
import FindTournament from './main/FindTournament.jsx';
import GoogleMap from './main/GoogleMap.jsx';


class App extends React.Component {
    constructor(props){
      super(props);
      this.findTourn = this.findTourn.bind(this);
      this.createTourn = this.createTourn.bind(this);
      this.backHome = this.backHome.bind(this);
      this.state = {
          data: {
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

findTourn(){
  this.setState({data: {one: <FindTournament data = {this.state.data} />}});
}

createTourn(){
  this.setState({data: {one: <Tournament />}});
}

backHome(){
  this.setState({data: {one: <Main findTourn = {this.findTourn} createTourn = {this.createTourn} backHome = {this.backHome} />}});
}
componentDidMount(){


}


   render() {

      return (
      <div>
        <div>
          <Nav backHome={this.backHome} />
        </div>
        <div>
          {this.state.data.one}
        </div>
      </div>
    );
  }
}

export default App;
