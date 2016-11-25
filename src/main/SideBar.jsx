import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SideBar extends React.Component {
    constructor(props){
      super(props);

    }



   render() {
    console.log(this.props.data);
      return (
        <div className="sidebar-container">
        <h1>Tournaments near you!</h1>

        <div className="well" id="tournament-box">

            <h3><span id="tournament-name" className ="tourn-info">{this.props.data.tournamentName}</span></h3>
            <hr/>
            <h4>Game Type: <span id="tournament-game-type" className ="tourn-info">{this.props.data.tournamentGameType}</span></h4>
            <h4>Location: <span id="tournament-location" className ="tourn-info">{this.props.data.tournamentLocation}</span></h4>
            <h4>Start Time: <span id="tournament-start-time" className ="tourn-info">{this.props.data.tournamentStart}</span></h4>
            <h4>Date: <span id="tournament-date" className ="tourn-info">{this.props.data.tournamentDate}</span></h4>
            <h4>Max Players: <span id="tournament-player-max" className ="tourn-info"> {this.props.data.tournamentPlayerMax} </span></h4>
            <h4>Current Players: <span id="tournament-player-current" className ="tourn-info"> {this.props.data.tournamentPlayerCurrent} </span></h4>
            <button type="submit" className="btn btn-default">Join Tournament</button>
            <button type="submit" className="btn btn-default">More Details</button>
          </div>
        </div>
    );
  }
}

export default SideBar;