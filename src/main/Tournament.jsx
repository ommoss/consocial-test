import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Tournament extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
        <div className="tournInput">
          <h1> Create Your Own Tournament Here </h1>
            <formControl>
              <h3>Tournament Name</h3>
              <input type="text" name="tournName"></input>
              <h3>Game Type</h3>
              <input type="text" name="tournGame"></input>
              <h3>Start Time</h3>
              <input type="text" name="tournStart"></input>
              <h3>Max Players</h3>
              <input type="text" name="maxPlayers"></input>
              <h3>Location</h3>
              <input type="text" name="location"></input>
              <h3>Time</h3>
              <input type="text" name="time"></input>
              <h3>Date</h3>
              <input type="text" name="date"></input>
              <h3>Extra Information</h3>
              <input type="text" name="date"></input>
              <br/>
              <button type="submit" className="btn btn-default">Create Tournament</button>

            </formControl>

        </div>



      )
  }
}
export default Tournament