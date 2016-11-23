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

<<<<<<< HEAD
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
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM tournament ORDER BY id;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      this.setState({data:{tournament: results}})
    });
  });
}
=======
  findTourn(){
    this.setState({data: {one: <FindTournament data = {this.state.data} />}});
  }

  createTourn(){
    this.setState({data: {one: <Tournament />}});
  }
>>>>>>> d47b86ac44886af7ec5f296e193eb9f6f3b133c5

  backHome(){
    this.setState({data: {one: <Main findTourn = {this.findTourn} createTourn = {this.createTourn} backHome = {this.backHome} />}});
  }
  componentDidMount(){
    console.log(query);
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
