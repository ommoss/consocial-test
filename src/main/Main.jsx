import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap.jsx';
import SideBar from './SideBar.jsx';
import Col from 'react-bootstrap/lib/Col';
import Tournament from './Tournament.jsx';


class Main extends React.Component {
    constructor(props){
      super(props);
      this.state = {site: <GoogleMap />};

    }


   render() {


      return (
      <div>
        <Col xs={4} md={4}>
          <SideBar data={this.props.data}/>
        </Col>
        <div>
        <Col id = "map" xs={8} md={8}>
          {this.state.site}
        </Col>

        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default Main;