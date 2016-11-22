import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Login from './Login.jsx';
import Signup from './Signup.jsx';


class Nav extends React.Component {
  constructor(props){
    super(props);
  }



  render() {
    return(
      <Row id = "navBar">
        <Col xs={1} md={1}>
        </Col>
        <Col xs={5} md={5}>
        <h1 onClick={this.props.backHome}>Consocial</h1>
        </Col>
        <Col xs={5} md={5}>
          <ButtonToolbar className = "navRight">
            <ButtonGroup>
                <Login />
                <Signup />
              </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
    );
  }
}

export default Nav;
