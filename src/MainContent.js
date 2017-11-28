import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class MainContent extends Component {

  constructor(props){
    super(props)
    this.Selection = this.Selection.bind(this);
    this.myClick = this.myClick.bind(this);
  }

  myClick(){
    if(this.props.Log()){
      this.Selection();
    }
  }

  Selection(){
    this.props.goSelection();
  }


  render() {
    return (
        <div className="App-intro">
          <p >
            <img src={logo} className="Main-logo" alt="logo" />
          </p>  
          <h1> 
            Welcome to [Codiz]
          </h1>
          <p>
            <button className="Play" onClick={this.myClick}>
              Play Now
            </button>
          </p>

          <p>
            <button className="PlayNoRegister" onClick={this.Selection}>
              Play without registration
            </button>
          </p> 



        </div>
    );
  }
}