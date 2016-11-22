import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav/Nav.jsx';
import Tournament from './Tournament.jsx';
import Create from './Create.jsx';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Find from './Find.jsx'


class Main extends React.Component {
    constructor(props){
      super(props);

}

 render() {
    return (
      <div>
        <div id="fullMain">
          <Row>
            <Col className = 'left' xs={6} md={6} >
              <Find findTourn={this.props.findTourn} />
            </Col>
            <Col className = 'right' xs={6} md={6}>
              <div>
                <Create createTourn={this.props.createTourn} />
              </div>
            </Col>
           </Row>
        </div>
      </div>
    );
  }
}

export default Main;
