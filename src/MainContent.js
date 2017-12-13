import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class MainContent extends Component {

  constructor(props){
    super(props)
    this.state={
      happen:''
    }
    this.Selection = this.Selection.bind(this);
    this.myClick = this.myClick.bind(this);
    this.somethingHappen = this.somethingHappen.bind(this);
  }

  somethingHappen(){
    return(
      this.state.happen
    );
  }

  myClick(){
    if(this.props.Log()){
      this.Selection();
    }else{
      this.setState({
        happen: "LOG IN FIRST, PLEASE"
      });
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
          <p className="Alert"> 
            {this.somethingHappen()}
          </p>
          <p>
            <button className="Play" onClick={this.myClick}>
              Play Now
            </button>
          </p>
        </div>
    );
  }
}