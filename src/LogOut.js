import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class LogOut extends Component {

  constructor(props){
    super(props)
    this.DaleLog = this.DaleLog.bind(this);
    this.StayLogged = this.StayLogged.bind(this);
  }

  DaleLog(){
    this.props.LogNow();
  }

  StayLogged(){
    this.props.Nothing();
  }
  
  render() {
    return (
      <div className="App-intro">
        <p>
          <img src={logo} className="Main-logo" alt="logo" />
        </p> 

        <h2>
          Do you want to log out from [CodiZ]?
        </h2>

          <button className="LogoutButtons" onClick={this.DaleLog}>
            YES
          </button>
          <button className="LogoutButtons" onClick={this.StayLogged}>
            NO
          </button>      
        </div>
    );
  }
}