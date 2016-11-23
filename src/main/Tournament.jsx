import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class Tournament extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (

        <div className="tournInput">
          <Row>
          <Col xs={1} md={1}>
          <button className="btn btn-default">Home</button>
          </Col>
            <Col  xs={10} md={10}>
            <h1> Create Your Own Tournament Here </h1>
              <formControl>
                <div className="container">
                <Col  xs={4} md={4}>
                  <h3>Tournament Name</h3>
                </Col>

                <Col  xs={8} md={8}>
                  <input type="text" name="tournName" className="input-lg col-md-12"></input>
                </Col>
                </div>
                <div className="container">
                <Col  xs={4} md={4}>
                  <h3>Game Type</h3>
                </Col>

                <Col  xs={8} md={8}>
                  <input type="text" name="tournGame" className="input-lg col-md-12"></input>
                </Col>
                </div>
                <div className="container">
                <Col  xs={4} md={4}>
                  <h3>Start Time</h3>
                </Col>
                <Col  xs={8} md={8}>
                  <input type="text" name="tournStart" className="input-lg col-md-12"></input>
                </Col>
                </div>

                <div className="container">
                <Col  xs={4} md={4}>
                  <h3>Max Players</h3>
                </Col>

                <Col  xs={8} md={8}>
                  <input type="text" name="maxPlayers" className="input-lg col-md-12"></input>
                </Col>
                </div>

                <div className="container">
                  <Col  xs={4} md={4}>
                    <h3>Location</h3>
                  </Col>
                  <Col  xs={8} md={8}>
                    <input type="text" name="location" className="input-lg col-md-12"></input>
                  </Col>
                </div>

                <div className="container">
                <Col  xs={4} md={4}>
                <h3>Time</h3>
                 </Col>
                <Col  xs={8} md={8}>
                <input type="text" name="time" className="input-lg col-md-12"></input>
                 </Col>
                 </div>

                <div className="container">
                  <Col  xs={4} md={4}>
                    <h3>Date</h3>
                  </Col>
                  <Col  xs={8} md={8}>
                    <input type="text" name="date" className="input-lg col-md-12"></input>
                  </Col>
                 </div>


                <div className="container">
                  <Col  xs={4} md={4}>
                    <h3>Extra Information</h3>
                  </Col>
                  <Col  xs={8} md={8}>
                    <textarea rows="4" cols="50" name="date" className="input-lg col-md-12"></textarea>
                  </Col>
                </div>
                <br/>
                 <Col xs={12} md={12}>
                <button type="submit" className="btn btn-default">Create Tournament</button>
                 </Col>

              </formControl>
              </Col>
            </Row>

        </div>



      )
  }
}
export default Tournament