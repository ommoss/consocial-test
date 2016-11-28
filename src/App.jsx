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
      this.state = {
          data: {
            one: <Main findTourn = {this.findTourn} createTourn = {this.createTourn} backHome = {this.backHome} />
          },
          tournaments:[]
      }
  }
updateFromDatabase () {
  $.ajax({
    method: "post",
    url: "/tournaments",
    dataType: 'json'
  }).done((response) => {
    this.setState({tournaments: response.test});
  });
}

findTourn(){
  this.updateFromDatabase();
  this.setState({data: {one: <FindTournament data = {this.state.tournaments} />}});
}

createTourn(){
  this.setState({data: {one: <Tournament />}});
}

backHome(){
  this.setState({data: {one: <Main findTourn = {this.findTourn} createTourn = {this.createTourn} backHome = {this.backHome} />}});
}
componentDidMount(){
  this.updateFromDatabase();
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
