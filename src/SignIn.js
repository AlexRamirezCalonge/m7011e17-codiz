import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class SignIn extends Component {
  
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
            <input type="text"
             placeholder="Username" />
          </p>

          <p className="Password">
            <input type="password"
             placeholder="Password"/>
          </p> 

          <p className="RPassword">
            <input type="password"
             placeholder="Repeat Password"/>
          </p> 

          <p className="Email">
            <input type="text"
             placeholder="Email"/>
          </p> 
          <button className="Enter" onClick="fds">
            SIGN IN
          </button> 
        </div>
    );
  }
}