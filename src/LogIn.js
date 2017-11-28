import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class LogIn extends Component {

  constructor(props){
    super(props)
    this.DaleLog = this.DaleLog.bind(this);

  }

  DaleLog(){
    this.props.LogNow();
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
            <input type="text"
             placeholder="Username" />
          </p>

          <p className="Password">
            <input type="password"
             placeholder="Password"/>
          </p> 

          <button onClick={this.DaleLog}>
            LOG IN
          </button>
          
          <p>
            <a href="http://www.marca.com/">
            You forgot your password?</a>
          </p>       
        </div>
    );
  }
}