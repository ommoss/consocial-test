import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';

 class More extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }





  render() {
    let close = () => this.setState({ show: false});
    return(
      <div>
        <Button onClick={() => this.setState({ show: true})}>More Details</Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
        >
          <Modal.Header>
          <Col  xs={8} md={8}>
          <h3 id ='title'>{this.props.data.title}</h3>
          </Col>
          <Col xs={4} md={4}>
          <h5 id = 'players'>Players: {this.props.data.current}/{this.props.data.max}</h5>
          </Col>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.data.body}</p>
          </Modal.Body>
          <Modal.Footer>
            <p id='time'>Start Time: {this.props.data.time}</p>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default More;