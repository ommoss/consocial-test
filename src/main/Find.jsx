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

      <div className="find-box">
        <div className="find-header">
          <h1><b>Find a tournament</b></h1>
          <h4><b>Join a local tournament</b></h4>
        </div>
        <Button className="innerbtn" onClick={this.props.findTourn}>Start Here</Button>
     </div>
    );
  }
}

export default Find;
