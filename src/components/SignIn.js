import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

class SignIn extends Component {

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
    Que el correa tenga . y @ --> Hecho
    Que las contraseñas tengan 8 caracteres mínimo --> Hecho
    Que no se utilice el mismo nick y el mismo email que ya se use
  */
  TrySignIn = () =>  {
    
      var params = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      };
      console.log(params);

      if(this.state.username==='' || this.state.password==='' || this.state.email==='' || this.state.repeatPassword===''){
          this.setState({happen:"EMPTY BOXES, TRY AGAIN"});
        }else if(this.state.email.indexOf('@') === -1 || this.state.email.indexOf('.') === -1){
          this.setState({happen:"IT IS NOT A VALID EMAIL, TRY AGAIN"});
        }else if (this.state.password.length < 8){
          this.setState({happen:"PASSWORD MUST CONTAIN 8 CHARACTERS AT LEAST, TRY AGAIN"});
        }else if(this.state.password !== this.state.repeatPassword){
          this.setState({happen:"IT IS NOT THE SAME PASSWORD, TRY AGAIN"});
        }else{
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
            if(responseData.success){
              alert('YOU HAVE BEEN REGISTERED SUCCESFULLY')
              this.props.history.replace('/');
            }else {
              this.setState({happen:"USERNAME OR EMAIL ALREADY TAKEN"});
            }      
          })    
      }   
  }

  render() {
    return (
      <div className="App-intro">
        <p>
          <img src={logo} className="Main-logo" alt="logo" />
        </p> 

        <div class="login-page">
          <div class="form">
            
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
              <p className="Alert">
                {this.somethingHappen()}
              </p>
              <button className="Enter" onClick={this.TrySignIn}>
                SIGN IN
              </button> 
            
            </div>      
          </div>
        </div>
    );
  }
}

export default SignIn;