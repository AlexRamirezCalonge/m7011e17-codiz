import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';

export class NavBar extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
//Quiero que esto sea la barra de navegación y que no se recargue, solo cuando haces login y tal
//Preguntar a Ramiro

      <div className="Nav-bar">
        <a href="">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <button className="Log-in" href= "./LogIn.js">
          Log in
        </button>
        <button className="Sign-in" onClick="">
          Sign in
        </button>
      </div>
      );
	}
}