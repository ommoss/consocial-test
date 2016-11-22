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
    this.loginCheck = this.loginCheck.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePassWordChange = this.handlePassWordChange.bind(this);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  loginCheck(event){
 }

  handleUserNameChange(event){
    this.setState({username: event.target.value})
    console.log(this.state.username);
  }

  handlePassWordChange(event){
    this.setState({password: event.target.value})
  }



  render() {
    let close = () => this.setState({ show: false});
    return(
      <div>

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
            <form id = "login" onSubmit={this.loginCheck}>
              <FormGroup controlId = "login" >
                <ControlLabel>Username</ControlLabel>
                <FormControl type = "text" value={this.state.username} onKeyDown={this.loginCheck} onChange={this.handleUserNameChange}/>
                <ControlLabel>Password</ControlLabel>
                <FormControl type = "password" value={this.state.password} onChange={this.handlePassWordChange}/>
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