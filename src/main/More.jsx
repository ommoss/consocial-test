import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

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
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">All the details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.data}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default More;