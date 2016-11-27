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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      username: "",
      password: "",
      u1: "bob",
      p1: "bob"
    }
  }

  loginCheck(event){
      if(this.state.username === this.state.u1 && this.state.password === this.state.u1){
        this.close();
        console.log('You are correct sir')
    }
  }

  handleSubmit(event){
      if(event.key === "Enter"){
        this.loginCheck();
        console.log('register handleSubnmit')
      }

 }


  handleChange(event){
    if(event.target.id === "userName"){
      this.setState({ username: event.target.value})
      console.log(this.state.username);
    } else {
    this.setState({password: event.target.value})
    console.log(this.state.password);
    }
  }

close(){ this.setState({ show: false})}

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
          onKeyDown={this.handleSubmit}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Enter Your Credentials</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id = "login" onSubmit={this.loginCheck} >
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl id="userName" type = "text" value={this.state.username} onKeyDown={this.handleSubmit} onChange={this.handleChange}/>
                <ControlLabel>Password</ControlLabel>
                <FormControl id="password" type = "password" value={this.state.password} onChange={this.handleChange}/>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.loginCheck}>Submit</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Login;