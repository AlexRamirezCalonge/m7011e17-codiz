import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.Bv9ettdV9dsBUGw0pY';


// The Header creates links that can be used to navigate
// between routes.
class NavBar extends Component{

  render(){
    return(
      <div className="Nav-bar">
        <Link to='/'>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <Link to='/login'>
          <button className="Log-in" >
            Log In
          </button>
        </Link>
        <Link to='/signin'>
          <button className="Sign-in">
            Sign In
          </button>
        </Link>
      </div>
    );
  }
}

export default NavBar
