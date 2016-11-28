import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SideBar extends React.Component {
    constructor(props){
      super(props);
    }



   render() {
    var data = this.props.data
    console.log(data[0].id);
      return (
        <div>
          {data.map(function(object, i){
            return(
              <div className='tournament' key={object.id}>
                <div className="sidebar-container">
                <div className="well" id="tournament-box">
                  <h3><span id="tournament-name" className ="tourn-info">{object.title}</span></h3>
                  <hr/>
                  <h4>Game Type: <span id="tournament-game-type" className ="tourn-info">{object.game_id}</span></h4>
                  <h4>Location: <span id="tournament-location" className ="tourn-info">{object.body}</span></h4>
                  <h4>Start Time: <span id="tournament-start-time" className ="tourn-info">{object.time}</span></h4>
                  <h4>Date: <span id="tournament-date" className ="tourn-info">{object.date}</span></h4>
                  <h4>Max Players: <span id="tournament-player-max" className ="tourn-info"> {object.max} </span></h4>
                  <h4>Current Players: <span id="tournament-player-current" className ="tourn-info"> {object.current} </span></h4>
                  <button type="submit" className="btn btn-default">Join Tournament</button>
                  <button type="submit" className="btn btn-default">More Details</button>
                </div>
                </div>
              </div>
                )
              }
            )
          }
        </div>
      );
    }
}

export default SideBar;