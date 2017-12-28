import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.Bv9ettdV9dsBUGw0pY';


// The Header creates links that can be used to navigate
// between routes.
class NavBarLog extends Component{

  constructor(props) {
    super(props);
    this.LogOut = this.LogOut.bind(this);
  }

  LogOut = () =>{
    this.props.isLogged();
  }

  render(){
    return(
      <div className="Nav-bar">
        <Link to='/'>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <Link to='/'>
          <button className="Log-in" onClick={this.LogOut} >
            Log Out
          </button>
        </Link>
        <Link to='/ranking'>
          <button className="Sign-in">
            MyCodiz
          </button>
        </Link>
      </div>
    );
  }
}

export default NavBarLog