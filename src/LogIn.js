import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class LogIn extends Component {

  constructor(props){
    super(props)
    this.state= {
      name: '',
      pass: ''
    }
    this.TryLog = this.TryLog.bind(this);

  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ pass: event.target.value });
  };

/*
Aqui tendríamos que comprobar que el user y la password están en la base de datos para acceder.
Por ahora pongo uno predefinido
*/

  TryLog(){
    if(this.state.name==='' || this.state.pass===''){
      alert('EMPTY BOXES, TRY GOING');
    }else if(this.state.name==='Alex' && this.state.pass==='hola'){
      this.props.LogNow();
    }else{
      alert('INCORRECT USERNAME OR PASSWORD, TRY AGAIN');
    }
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
            <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Username" />
          </p>

          <p className="Password">
            <input type="password" value={this.state.pass} onChange={this.handlePasswordChange} placeholder="Password" />
          </p> 

          <button onClick={this.TryLog}>
            LOG IN
          </button>
          
          <p>
            <a href="http://www.marca.com/">
              You forgot your password?
            </a>
          </p>       
        </div>
    );
  }
}