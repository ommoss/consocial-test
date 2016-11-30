import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import More from './More.jsx';
class SideBar extends React.Component {
    constructor(props){
      super(props);
    }



   render() {
    var data = this.props.data;
      return (
        <div>
          {data.map(function(object, i){
            return(
              <div className='tournament' key={object.id}>
                <div className="sidebar-container">
                <div className="well" id="tournament-box">
                  <h3><span id="tournament-name" className ="tourn-info">{object.title}</span></h3>
                  <hr/>
                  <h4>Game Type: <span id="tournament-game-type" className ="tourn-info">{object.game}</span></h4>
                  <h4>Location: <span id="tournament-location" className ="tourn-info">{object.location}</span></h4>
                  <h4>Date: <span id="tournament-date" className ="tourn-info">{object.date}</span></h4>
                  <More data ={object} />
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