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

          <h3>To find a tournament is your area</h3>
          <h5>Join a public tournament to meet new people</h5>
          <h1 className="inner" onClick={this.props.findTourn}>Start Here</h1>
        </Col>
     </Col>
    );
  }
}

export default Find;
