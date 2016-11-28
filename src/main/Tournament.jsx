import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Tournament extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.formCheck = this.formCheck.bind(this);
    this.state = {
      tournName:"",
      tournGame:"",
      tournStart:"",
      maxPlayers:"",
      location:"",
      time:"",
      extraInfo:""

    }
  }

formCheck(){
if(this.state.tournName && this.state.tournGame && this.state.tournStart && this.state.maxPlayers && this.state.location && this.state.extraInfo){
  alert("good job");
} else {alert("fill in all forms please")
}
}

handleChange(event){
  if(event.target.id === "tournName"){
    this.setState({ tournName: event.target.value})

  } else if (event.target.id ==="tournGame"){
    this.setState({tournGame: event.target.value});
  } else if (event.target.id ==="tournStart"){
    this.setState({tournStart: event.target.value});
  } else if (event.target.id ==="maxPlayers"){
    this.setState({maxPlayers: event.target.value});
  } else if (event.target.id ==="location"){
    this.setState({location: event.target.value});
  }else if (event.target.id ==="extraInfo"){
    this.setState({extraInfo: event.target.value});
  }console.log(this.state)
}

  render() {
    return (
      <div className="tournDiv">

        <div className="tournInput">
          <Row>
          <Col xs={1} md={1}>

          </Col>
            <Col  xs={10} md={10}>
            <h1> Create Your Own Tournament Here </h1>
              <formControl>
                <div className="container">
                <Col  xs={4} md={4}>
                  <h3>Tournament Name</h3>
                </Col>

                <Col  xs={8} md={8}>
                  <input type="text" name="tournName" id="tournName" value={this.state.tournName} className="input-lg col-md-12 tourninputs" onChange={this.handleChange}></input>
                </Col>
                </div>
                <div className="container">
                <Col  xs={4} md={4}>
                  <h3>Game Type</h3>
                </Col>

                <Col  xs={8} md={8}>
                  <input type="text" name="tournGame" id="tournGame" value={this.state.tournGame} className="input-lg col-md-12 tourninputs" onChange={this.handleChange}></input>
                </Col>
                </div>
                <div className="container">
                <Col  xs={4} md={4}>
                  <h3>Start Time</h3>
                </Col>
                <Col  xs={8} md={8}>
                  <input type="time" name="tournStart" id="tournStart" value={this.state.tournStart} className="input-lg col-md-12 tourninputs" onChange={this.handleChange}></input>
                </Col>
                </div>

                <div className="container">
                <Col  xs={4} md={4}>
                  <h3>Max Players</h3>
                </Col>

                <Col  xs={8} md={8}>
                  <input type="number" name="maxPlayers" id="maxPlayers" value={this.state.maxPlayers} className="input-lg col-md-12 tourninputs" onChange={this.handleChange}></input>
                </Col>
                </div>

                <div className="container">
                  <Col  xs={4} md={4}>
                    <h3>Location</h3>
                  </Col>
                  <Col  xs={8} md={8}>
                    <input type="text" name="location" id="location" value={this.state.location} className="input-lg col-md-12 tourninputs" onChange={this.handleChange}></input>
                  </Col>
                </div>

                <div className="container">
                  <Col  xs={4} md={4}>
                    <h3>Date</h3>
                  </Col>
                  <Col  xs={8} md={8}>
                    <input type="date" name="date" id="date" value={this.state.date} className="input-lg col-md-12 tourninputs" onChange={this.handleChange}></input>
                  </Col>
                 </div>


                <div className="container">
                  <Col  xs={4} md={4}>
                    <h3>Extra Information</h3>
                  </Col>
                  <Col  xs={8} md={8}>
                    <textarea rows="4" cols="50" name="extraInfo" id="extraInfo" value={this.state.extraInfo} className="input-lg col-md-12 tourninputs" onChange={this.handleChange}></textarea>
                  </Col>
                </div>
                <br/>
                 <Col xs={12} md={12}>
                <button type="submit" className="btn btn-default" onClick={this.formCheck}>Create Tournament</button>
                 </Col>

              </formControl>
              </Col>
            </Row>
          </div>
        </div>




      )
  }
}
export default Tournament