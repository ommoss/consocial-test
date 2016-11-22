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
        <div className="innerdiv" >

          <h3>To find a tournament is your area</h3>
          <h5>Join a public tournament to meet new people</h5>
          <h1 className="inner" onClick={this.props.findTourn}>Start Here</h1>
        </div>
     </div>
    );
  }
}

export default Find;
