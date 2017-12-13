import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionNumber : 0,
      questions: [],
      difficulty: props.difficultyId,
      theme: props.themeId,
      quizID: 0,
      score: -1
    }
    this.goHome=this.goHome.bind(this)
  }

  componentWillMount() {

    fetch("https://test.castiello.tk:8443/private/quiz/getByThemeAndDifficulty?theme="+this.state.theme+"&difficulty="+this.state.difficulty,{
      method: "GET",
      credentials: 'include'
    })
    .then((response) => {
            console.log(response);

      return response.json()
    })
    .then((quiz) => {
      this.setState({
        quizID : quiz.quizID,
        questions : quiz.questions
      });     
    })

  }

  goHome(){
    this.props.home();
  }

  sendAnswer = (event, selected) => {
    var qn = this.state.questionNumber;

    console.log(qn)
      this.setState({
        questionNumber: qn+1
      }); 
    
    qn= qn+1;

    console.log(qn)
    
    fetch("https://test.castiello.tk:8443/private/answer/create",
        {
          method: "POST",
          mode: "no-cors",
          credentials: "include",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            quiz: this.state.quizID,
            question: this.state.questions[this.state.questionNumber].questionID,
            answer: selected
          })
        }
      )
    .then(( ) => {
       
        if(qn>=10){

          fetch("https://test.castiello.tk:8443/private/score/getByUserAndQuiz?quiz="+this.state.quizID,{
            method: "GET",
            credentials: 'include'
          })
          .then((response) => {
            return response.json()
          })
          .then((score) => {
            this.setState({ score: score.answersRight })
          })
        }
        

     })         
  }

  render() {
    if(this.state.questionNumber>=10 && this.state.score >= 0){
      return(
        <div className="App-intro">
          <h2>
            Thank you for playing
          </h2> 
          <h2>
            Your final score is : {this.state.score}
          </h2>
          <button className="Play" onClick={this.goHome}>
            Go Back
          </button>
        </div>
      );
    }

    if(this.state.questions.length>0 && this.state.questionNumber<10){
      return (
          <div className="App-intro"> 
            <h1> 
              Question {this.state.questionNumber+1}
            </h1>
            <h2>
              {this.state.questions[this.state.questionNumber].title}
            </h2>
            <p>
              <button className="Answer" onClick={(e) => this.sendAnswer(e, this.state.questions[this.state.questionNumber].correct) } >
                {this.state.questions[this.state.questionNumber].correct}
              </button> 
              <button className="Answer" onClick={(e) => this.sendAnswer(e, this.state.questions[this.state.questionNumber].answer2) } >
                {this.state.questions[this.state.questionNumber].answer2}
              </button>          
            </p>
            <p>
              <button className="Answer" onClick={(e) => this.sendAnswer(e, this.state.questions[this.state.questionNumber].answer3) }>
                {this.state.questions[this.state.questionNumber].answer3}
              </button>
              <button className="Answer" onClick={(e) => this.sendAnswer(e, this.state.questions[this.state.questionNumber].answer4) }>
                {this.state.questions[this.state.questionNumber].answer4}
              </button>        
            </p>
          </div>
      );
    }else{
      return(
        <div className="App-intro">
          <p>
            <img src={logo} className="Main-logo" alt="logo" />
          </p> 
          <h2>LOADING</h2>
        </div>
      );
    }

  }
}