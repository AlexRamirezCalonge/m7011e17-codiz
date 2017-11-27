import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';

export class NavBar extends Component {

  constructor(props){
    super(props)
    this.Login = this.Login.bind(this);
    this.Signin = this.Signin.bind(this);
    this.Home = this.Home.bind(this);
  }

  Login(){
    this.props.goLogin();
  }

  Signin(){
    this.props.goSignin();
  }

  Home(){
    this.props.home();
  }

  render() {
    return (

      <div className="Nav-bar">
        <a onClick={this.Home}>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
          
        <button className="Log-in" onClick={this.Login}>
          Log In
        </button>

        <button className="Sign-in" onClick={this.Signin}>
          Sign In
        </button>      
      </div>
      );
	}
}