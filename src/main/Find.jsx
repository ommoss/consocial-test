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

        <Col className="innerdiv" sm={4} md={4}>

          <h1>Find a tournament</h1>
          <h4>Join a public tournament</h4>
          <h1 className="inner" onClick={this.props.findTourn}>Start Here</h1>
        </Col>
     </Col>
    );
  }
}

export default Find;
