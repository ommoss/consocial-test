import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Tournament from './Tournament.jsx';
import Create from './Create.jsx';
import Find from './Find.jsx'


class Main extends React.Component {
    constructor(props){
      super(props);

}

 render() {
    return (
      <div className="main-container">
        <div className='left-container'>
          <Find findTourn={this.props.findTourn} />
        </div>
        <div className='right-container'>
          <Create createTourn={this.props.createTourn} />
        </div>
      </div>
    );
  }
}

export default Main;
