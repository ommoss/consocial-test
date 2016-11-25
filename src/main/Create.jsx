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
         <Col sm={1} md={1}>
        </Col>
        <Col className="inner1div" sm={6} md={6}>
          <h1>Create a tournament</h1>
          <h4> Host your friends!</h4>
          <h1 className="inner1btn" onClick={this.props.createTourn}>Start Here</h1>
        </Col>
      </Col>
    );
  }
}

export default Create;




