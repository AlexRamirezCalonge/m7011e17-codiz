import React, { Component } from 'react';
import './App.css';

export class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionNumber : 1
    }
    this.saveAnswer = this.saveAnswer.bind(this);
    this.readQuestion = this.readQuestion.bind(this);
  }

  saveAnswer(){
    this.setState({
      questionNumber: this.state.questionNumber+1
    });
  }

  readQuestion(){
    return (
      "What do you think about React js?"
    );
  }

  readAnswer(){
    return(
      "It is Awesome"
    );
  }


  render() {
    return (
        <div className="App-intro"> 
          <h2> 
            Question {this.state.questionNumber}: {this.readQuestion()}
          </h2>
          <p>
            <button className="Play" onClick={this.saveAnswer}>
              {this.readAnswer()}
            </button> 
            <button className="Play" onClick={this.saveAnswer}>
              {this.readAnswer()}
            </button>          
          </p>
          <p>
            <button className="Play" onClick={this.saveAnswer}>
              {this.readAnswer()}
            </button>
            <button className="Play" onClick={this.saveAnswer}>
              {this.readAnswer()}
            </button>        
          </p>
        </div>
    );
  }
}