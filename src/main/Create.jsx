import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';

class Create extends React.Component {
     constructor(props){
      super(props);
      this.state = {}
  }

  render() {
    return (

      <Col id="createTourn" sm={12} md={12}>
        <img src={require('../assets/videogameparty.jpg')}/>

        <Col className="inner1div" sm={11} md={11} smOffset={1} mdOffset={1}>
          <div className="innerdivheadline">
          <h1><b>Create a tournament</b></h1>
          <h4><b>Host your friends!</b></h4>
          </div>
          <h1 className="inner1btn" onClick={this.props.createTourn}>Start Here</h1>
        </Col>
      </Col>
    );
  }
}

export default Create;




