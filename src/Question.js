import React, { Component } from 'react';
import './App.css';

export class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionNumber : 0,
      questions: [],
      difficulty: props.difficultyId,
      theme: props.themeId,
      quizID: 0
    }
  }

  componentWillMount() {

    fetch("https://test.castiello.tk:8443/private/quiz/getByThemeAndDifficulty?theme="+this.state.theme+"&difficulty="+this.state.difficulty,{
      method: "GET",
      credentials: 'include'
    })
    .then((response) => {
      return response.json()
    })
    .then((quiz) => {
      this.setState({
        quizID : quiz.quizID,
        questions : quiz.questions
      });     
    })

  }

  sendAnswer = (event, selected) => {
    fetch("https://test.castiello.tk:8443/private/answer/create",
        {
          method: "POST",
          credentials: "include",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            quiz: this.state.quizID,
            question: this.state.questions[this.state.questionNumber].questionID,
            answer: selected
          })
        }
      )
    .then((response) => response.json() )
    .then((responseData) => {
      console.log(responseData);
      if(responseData.success){
        this.setState({
          questionNumber: this.state.questionNumber+1
        });
      }
          
      }).catch(function(e) {
        alert( e.message);
      } )       
  }


  render() {
    if(this.state.questionNumber>=10){
      return(
        <div className="App-intro">
          <h2>
            Thank You for Play
          </h2> 
          <h2>
            Your final score is : 
          </h2>
        </div>
      );
    }

    if(this.state.questions.length>0){
      return (
          <div className="App-intro"> 
            <h2> 
              Question {this.state.questionNumber+1}: {this.state.questions[this.state.questionNumber].title}
            </h2>
            <p>
              <button className="Play" onClick={(e) => this.sendAnswer(e, this.state.questions[this.state.questionNumber].correct) } >
                {this.state.questions[this.state.questionNumber].correct}
              </button> 
              <button className="Play" onClick={(e) => this.sendAnswer(e, this.state.questions[this.state.questionNumber].answer2) } >
                {this.state.questions[this.state.questionNumber].answer2}
              </button>          
            </p>
            <p>
              <button className="Play" onClick={(e) => this.sendAnswer(e, this.state.questions[this.state.questionNumber].answer3) }>
                {this.state.questions[this.state.questionNumber].answer3}
              </button>
              <button className="Play" onClick={(e) => this.sendAnswer(e, this.state.questions[this.state.questionNumber].answer4) }>
                {this.state.questions[this.state.questionNumber].answer4}
              </button>        
            </p>
          </div>
      );
    }else{
      return(
      <h2>LOADING</h2>
      );
    }

  }
}