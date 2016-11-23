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
     this.formCheck = this.formCheck.bind(this);
    // this.loginCheck = this.loginCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.close = this.close.bind(this);
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      u1: "bob",
      p1: "bob"
    }
  }

 //    handleSubmit(event){
 //      if(event.key === "Enter"){
 //        this.loginCheck();
 //        console.log('register handleSubnmit')
 //      }

 // }


  handleChange(event){
    if(event.target.id === "userName"){
      this.setState({ username: event.target.value})
      console.log(this.state.username);
    } else if (event.target.id ==="firstName"){
      this.setState({firstname: event.target.value});
    } else if (event.target.id ==="email"){
      this.setState({email: event.target.value});
    } else if (event.target.id ==="lastName"){
      this.setState({lastname: event.target.value});
    } else if (event.target.id ==="password"){
      this.setState({password: event.target.value});
    }
  }

  formCheck(){
    if(this.state.username && this.state.firstname && this.state.lastname && this.state.email && this.state.password){

    }else {alert("please fill in all forms")}
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
              <FormGroup >
                <ControlLabel>Username</ControlLabel>
                <FormControl id ="userName" type = "text" value={this.state.username} onChange={this.handleChange}/>
                <ControlLabel>First Name</ControlLabel>
                <FormControl type = "text" id="firstName" value={this.state.firstname} onChange={this.handleChange} />
                <ControlLabel>Last Name</ControlLabel>
                <FormControl type = "text" id="lastName" value={this.state.lastname} onChange={this.handleChange}/>
                <ControlLabel>Email</ControlLabel>
                <FormControl type = "text" id="email" value={this.state.email} onChange={this.handleChange}/>
                <ControlLabel>Password</ControlLabel>
                <FormControl type = "password" id="password" value={this.state.password} onChange={this.handleChange}/>
                <ControlLabel>Password Confirm</ControlLabel>
                <FormControl type = "password" id="password" value={this.state.password} onChange={this.handleChange}/>

              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.formCheck}>Submit</Button>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Signup;