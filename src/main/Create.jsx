import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';


class Create extends React.Component {
     constructor(props){
      super(props);
      this.state = {}
  }

  render() {
    return (
      <div id="createTourn">
        <div className="inner1div">
          <h3>To create a tournament</h3>
          <h1 className="inner1" onClick={this.props.createTourn}>Start Here</h1>
        </div>
      </div>
    );
  }
}

export default Create;




