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

        <Col className="innerdiv" sm={11} md={11}>
          <div className="innerdivheadline">
          <h1><b>Find a tournament</b></h1>
          <h4><b>Join a public tournament</b></h4>
          </div>
          <h1 className="innerbtn" onClick={this.props.findTourn}>Start Here</h1>
           <Col sm={1} md={1}>
        </Col>
        </Col>
     </Col>
    );
  }
}

export default Find;
