import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';


class Nav extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div id="navBar">
        <div className="brand" onClick={this.props.backHome}>Consocial</div>
        <div className="nav-buttons">
          <Button onClick={this.props.backHome}>Home</Button>
        </div>
      </div>
    );
  }
}

export default Nav;
