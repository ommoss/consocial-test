import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

 class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    let close = () => this.setState({ show: false});
    return(
      <div>
        <Button onClick={() => this.setState({ show: true})}>Sign Up</Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Sign up here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id = "signup">
              <FormGroup controlId = "signup" >
                <ControlLabel>Username</ControlLabel>
                <FormControl type = "text" />
                <ControlLabel>Password</ControlLabel>
                <FormControl type = "password" />
                <ControlLabel>Password Confirm</ControlLabel>
                <FormControl type = "password" />

              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button>Submit</Button>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Signup;