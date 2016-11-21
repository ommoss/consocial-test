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
      <div>
        <h1>Find for tournament</h1>
        <button>Find</button>
     </div>
    );
  }
}

export default Find;
