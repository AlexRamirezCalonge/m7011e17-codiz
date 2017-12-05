import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class SignIn extends Component {

  constructor(props){
    super(props)
    this.state= {
      username: '',
      password: '',
      email: '',
      repeatPassword: '',
      happen: ''
    }
    this.TrySignIn = this.TrySignIn.bind(this);
    this.signComplete = this.signComplete.bind(this);
  }

  somethingHappen(){
    return(
      this.state.happen
    );
  }

  handleNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleRepeatPassChange = (event) => {
    this.setState({ repeatPassword: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  signComplete(){
    this.props.Signed();
  }

  /*
  Habría que meter varias condiciones:
    Que todos los campos estén rellenados --> Hecho
    Que las dos contraseñas sean las mismas --> Hecho
    Que el correa tenga . y @
    Que las contraseñas tengan 8 caracteres mínimo
    Que no se utilice el mismo nick y el mismo email que ya se use
  */
  TrySignIn = () =>  {
    
      var params = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      };
      console.log(params);

//      CAMBIAR LAS ALERT

      return fetch("https://test.castiello.tk:8443/public/register",
          {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
              email: this.state.email,
            })
          }
        )
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        if(this.state.username==='' || this.state.password==='' || this.state.email==='' || this.state.repeatPassword===''){
          this.setState({happen:"EMPTY BOXES, TRY AGAIN"});
        }else if(this.state.password !== this.state.repeatPassword){
          this.setState({happen:"IT IS NOT THE SAME PASSWORD, TRY AGAIN"});
        }
        else if(responseData.success){
          this.setState({happen:"YOU HAVE BEEN REGISTERED SUCCESFULLY"});
          alert('YOU HAVE BEEN REGISTERED SUCCESFULLY')
          this.signComplete();
        }else {
          this.setState({happen:"USERNAME ALREADY TAKEN"});
          console.log("Incorrect sign in")
        }      
      })       
  }

  render() {
    return (
      <div className="App-intro">
        <p>
          <img src={logo} className="Main-logo" alt="logo" />
        </p> 

        <h1>
          Create a [CodiZ] account
        </h1>

          <p className="User">
            <input type="text" value={this.state.username} onChange={this.handleNameChange} placeholder="Username" />
          </p>

          <p className="Password">
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password"/>
          </p> 

          <p className="RPassword">
            <input type="password" value={this.state.repeatPassword} onChange={this.handleRepeatPassChange} placeholder="Repeat Password"/>
          </p> 

          <p className="Email">
            <input type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email"/>
          </p> 
          <p>
            {this.somethingHappen()}
          </p>
          <button className="Enter" onClick={this.TrySignIn}>
            SIGN IN
          </button> 
        </div>
    );
  }
}