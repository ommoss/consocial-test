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
        <Col xs={6} md={6}>
        <h1>Consocial</h1>
        </Col>
        <Col xs={6} md={6}>
          <ButtonToolbar className = "navRight">
            <ButtonGroup>
                <Button onClick={this.props.createTourn}>Create tournament</Button>
                <Button>Find tournament</Button>

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
