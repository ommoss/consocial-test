import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';


class Find extends React.Component {
     constructor(props){
      super(props);
      this.state = {}
  }

  render() {
    return (
      <div id="findtourn">
        <h1>Find a tournament</h1>
        <button onClick={this.props.findTourn}>Find</button>
     </div>
    );
  }
}

export default Find;
