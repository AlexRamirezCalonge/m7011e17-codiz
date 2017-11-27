import React, { Component } from 'react';
import { Answers } from './Answers.js'
import './App.css';

export class Question extends Component {
  render() {
    return (
        <div className="App-intro"> 
          <h2> 
            Question ?: Bla bla bla
          </h2>
          <p>
            <Answers /> 
            <Answers />           
          </p>
          <p>
            <Answers />
            <Answers />            
          </p>
        </div>
    );
  }
}