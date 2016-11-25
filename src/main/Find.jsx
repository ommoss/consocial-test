import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';




class Find extends React.Component {
     constructor(props){
      super(props);
      this.state = {}
  }

  render() {
    return (
      <Col id="findtourn" sm={12} md={12}>
      <img src={require('../assets/Joystick.jpg')}/>
        <Col sm={5} md={5}>
        </Col>
        <Col className="innerdiv" sm={6} md={6}>

          <h1>Find a tournament</h1>
          <h4>Join a public tournament</h4>
          <h1 className="innerbtn" onClick={this.props.findTourn}>Start Here</h1>
        </Col>
     </Col>
    );
  }
}

export default Find;
