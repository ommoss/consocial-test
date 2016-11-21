 import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap.jsx';
import SideBar from './SideBar.jsx';
import Col from 'react-bootstrap/lib/Col';
import Tournament from './Tournament.jsx';
import Row from 'react-bootstrap/lib/Row'


class Main extends React.Component {
    constructor(props){
      super(props);


    }


   render() {


      return (
      <div>
        <Row>
          <Col xs={4} md={4}>
            <SideBar data={this.props.data}/>
          </Col>
            <Col xs={8} md={8}>
          <div>
            {this.props.data.one}
          </div>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Main;