import React, { Component } from 'react';
import { Selection } from './Selection.js';
import { Question } from './Question.js';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class MainContent extends Component {

  constructor(props){
    super(props)
    this.state = {
      noRegister : false
    }
    this.changeSelection = this.changeSelection.bind(this);
  }

  myClick(){
    alert("Log in first");
  }

  changeSelection() {
    this.setState({ 
      noRegister : true
    });
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
            <button className="PlayNoRegister" onClick={this.changeSelection}>
              Play without registration
            </button>
          </p> 

          {this.state.noRegister ? <Question /> : <Selection />}


        </div>
    );
  }
}