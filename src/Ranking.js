import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class Ranking extends Component {

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
          <h2> 
            This is the ranking of USER
          </h2>
        </div>
    );
  }
}