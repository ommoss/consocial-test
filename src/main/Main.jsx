import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap.jsx';
import SideBar from './SideBar.jsx';
import Col from 'react-bootstrap/lib/Col';
import Tournament from './Tournament.jsx';
import Row from 'react-bootstrap/lib/Row';
import Find from './Find.jsx';
import Create from './Create.jsx';


class Main extends React.Component {
    constructor(props){
      super(props);


    }


   render() {


      return (
      <div>

        <Row>
          <Col xs={6} md={6}>
            <Find />
          </Col>
            <Col xs={6} md={6}>
          <div>
            <Create />
          </div>
            </Col>
        </Row>

      </div>
    );
  }
}

export default Main;