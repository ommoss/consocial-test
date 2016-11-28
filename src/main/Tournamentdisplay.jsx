import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';



class TournamentDisplay extends React.Component {
     constructor(props){
      super(props);
      this.state = {

      }
  }

  render() {
    return (
      <div className="tournDiv">
        <Col md={3} xs={3}>
        </Col>
        <Col md={2} xs={2} className="round">
          <h1 className="roundAnnounce">First Round</h1>
          <div className="matchup">
            <p className="top teamName">team1</p>
            <p className="teamName"> team2</p>
          </div>
          <div className="matchup">
            <p className="top teamName">team3</p>
            <p className="teamName"> team4</p>
          </div>
          <div className="matchup">
            <p className="top teamName">team5</p>
            <p className="teamName"> team6</p>
          </div>
          <div className="matchup">
            <p className="top teamName">team7</p>
            <p className="teamName"> team8</p>
          </div>
        </Col>
        <Col md={2} xs={2} className="round">
          <h1 className="roundAnnounce">Semi-Final</h1>
           <div className="matchup">
            <p className="top teamName">winner game1</p>
            <p className="teamName">winner game 2</p>
          </div>
           <div className="matchup">
            <p className="top teamName">winner game 3</p>
            <p className="teamName">winner game 4</p>
          </div>
        </Col>
        <Col md={2} xs={2} className="round">
          <h1 className="roundAnnounce">The Final</h1>
           <div className="matchup">
            <p className="top teamName">winner game 5</p>
            <p className="teamName">winner game 6</p>
          </div>
        </Col>

      </div>
    );
  }
}

export default TournamentDisplay;
