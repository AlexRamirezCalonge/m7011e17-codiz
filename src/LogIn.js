import React, { Component } from 'react';
import { NavBar } from './NavBar.js';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

class LogIn extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className="LogIn">
        <NavBar />
        Quiero esto en la pantalla de Log in

          <p className="User">
            <input type="text"
             placeholder="Username" />
          </p>

          <p className="Password">
            <input type="password"
             placeholder="Password"/>
          </p> 

          <p>
            <a href="http://www.marca.com/">
            You forgot your password?</a>
          </p>       
        </div>
      </div>
    );
  }
}

export default App;
