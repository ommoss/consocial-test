import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav/Nav.jsx';
import Main from './main/Main.jsx';
import Tournament from './main/Tournament.jsx';
import pg from 'pg';

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
          }
        }
  }

  componentDidMount(){
    pg.defaults.ssl = true;
    pg.connect(process.env.postgresql-metric-67809, function(err, client) {
    if (err){
      throw err;
    }
    console.log('Connected to postgres! Getting schemas...');
    client
      .query('SELECT table_schema,table_name FROM information_schema.tables;')
      .on('row', function(row) {
       console.log(JSON.stringify(row));
      });
    });
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
