import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap.jsx';
import SideBar from './SideBar.jsx';
import Col from 'react-bootstrap/lib/Col';
import Tournament from './Tournament.jsx';
import Row from 'react-bootstrap/lib/Row';


class FindTournament extends React.Component {
    constructor(props){
      super(props);
    }
   render() {


      return (
      <div className="tournDiv">
        <Row>
          <Col className="sideFind" xs={4} md={4}>
            <SideBar data={this.props.data}/>
          </Col>
            <Col xs={8} md={8}>
              <div className="mapdiv">
                <GoogleMap />
              </div>
            </Col>
        </Row>

      </div>
    );
  }
}

export default FindTournament;