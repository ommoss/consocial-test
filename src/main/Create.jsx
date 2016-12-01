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
      <div className="create-box">
        <div className="create-header">
          <h1><b>Create a tournament</b></h1>
          <h4><b>Host your friends!</b></h4>
        </div>
        <Button className="inner1btn" onClick={this.props.createTourn}>Start Here</Button>
      </div>
    );
  }
}

export default Create;
