import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';

export class NavBarLog extends Component {

  constructor(props){
    super(props)
    this.LogOut = this.LogOut.bind(this);
    this.Ranking = this.Ranking.bind(this);
    this.Home = this.Home.bind(this);
  }

  LogOut(){
    this.props.goLogout();
  }

  Ranking(){
    this.props.goRanking();
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

        <button className="Log-in" onClick={this.LogOut}>
          Log Out
        </button>
        
        <button className="Sign-in" onClick={this.Ranking}>
          MyCodiZ
        </button>
      </div>
      );
	}
}