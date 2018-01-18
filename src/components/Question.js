import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionNumber : 0,
      questions: [],
      difficulty: props.difficultyId,
      theme: props.themeId,
      quizID: 0,
      score: -1,
      scorePoint: 0
    }
    this.goHome=this.goHome.bind(this)
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

  goHome(){
    this.props.history.push('/');
  }

  sendAnswer = (event, selected) => {

    var qn = this.state.questionNumber;
      this.setState({
        questionNumber: qn+1
      }); 
    
    qn= qn+1;


    if(selected===this.state.questions[this.state.questionNumber].correct){

      this.point=this.state.scorePoint;
      this.setState({
        scorePoint: this.point +1
      });

      this.point=this.point+1;
    }
    
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
    this.point=this.state.scorePoint;
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
      

      var answers = [this.state.questions[this.state.questionNumber].correct,this.state.questions[this.state.questionNumber].answer2,
              this.state.questions[this.state.questionNumber].answer3, this.state.questions[this.state.questionNumber].answer4]
    
      answers = answers.sort(function() {return Math.random() - 0.5});

      var answer1 = answers[0]
      var answer2 = answers[1]
      var answer3 = answers[2]
      var answer4 = answers[3]

      return (
          <div className="App-intro"> 
            <h1> 
              Question {this.state.questionNumber+1} of 10
            </h1>
            <h2>
              {this.state.questions[this.state.questionNumber].title}
            </h2>
            <p>
              <button className="Answer" onClick={(e) => this.sendAnswer(e, answer1) } >
                {answer1}
              </button> 
              <button className="Answer" onClick={(e) => this.sendAnswer(e, answer2) } >
                {answer2}
              </button>          
            </p>
            <p>
              <button className="Answer" onClick={(e) => this.sendAnswer(e, answer3) }>
                {answer3}
              </button>
              <button className="Answer" onClick={(e) => this.sendAnswer(e, answer4) }>
                {answer4}
              </button>        
            </p>
            <h2>
              SCORE: {this.point}
            </h2>
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

export default Question;