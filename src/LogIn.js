import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class LogIn extends Component {

  constructor(props){
    super(props)
    this.state= {
      username: '',
      password: '' ,
      happen: ''
    }
    this.TryLog = this.TryLog.bind(this);

  }

  handleNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  somethingHappen(){
    return(
      this.state.happen
    );
  }

/*
Aqui tendríamos que comprobar que el user y la password están en la base de datos para acceder.
Por ahora pongo uno predefinido
*/

  TryLog = () =>  {
    
      var params = {
        username: this.state.username,
        password: this.state.password,
      };
      console.log(params);
      return fetch("https://test.castiello.tk:8443/public/login?username="+this.state.username+"&password="+this.state.password,
          {
            method: "POST",
            credentials: 'include'
          }
        )
      .then((response) => response.json() )
      .then((responseData) => {
        console.log(responseData);
        if(this.state.username==='' || this.state.password===''){
          this.setState({happen:"EMPTY BOXES, TRY AGAIN"});
          alert('EMPTY BOXES, TRY AGAIN');
        }else if(responseData.success){
          this.props.LogNow();
        }else{
          alert('INCORRECT USERNAME OR PASSWORD')
          console.log("Incorrect login")
        }      
      }).catch(function(e) {
        alert( e.message);
      } )       
  }
  
  render() {
    return (
      <div className="App-intro">
        <p>
          <img src={logo} className="Main-logo" alt="logo" />
        </p> 

        <h1>
          Log in to [CodiZ]
        </h1>

          <p className="User">
            <input type="text" value={this.state.username} onChange={this.handleNameChange} placeholder="Username" />
          </p>

          <p className="Password">
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" />
          </p> 

          <button onClick={this.TryLog}>
            LOG IN
          </button>

          <p>
            {this.somethingHappen()}
          </p>
          
          <p>
            <a href="http://www.marca.com/">
              You forgot your password?
            </a>
          </p>       
        </div>
    );
  }
}