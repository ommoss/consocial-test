import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';

 class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    let close = () => this.setState({ show: false});
    return(
      <div>
        <Button>Sign Up</Button>
        <Button
          onClick={() => this.setState({ show: true})}
        >
          Login
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Enter Your Credentials</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id = "login">
              <FormGroup controlId = "login" >
                <ControlLabel>Username</ControlLabel>
                <FormControl type = "text" />
                <ControlLabel>Password</ControlLabel>
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

export default Login;