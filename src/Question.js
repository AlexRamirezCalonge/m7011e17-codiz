import React, { Component } from 'react';
import { quizQuestions } from './quizQuestions.js'
import './App.css';

export class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionNumber : 1,
      score: 0,
      end: false,
      question: '',
      answer:''
    }
    this.saveAnswer1 = this.saveAnswer1.bind(this);
    this.saveAnswer2 = this.saveAnswer2.bind(this);
    this.saveAnswer3 = this.saveAnswer3.bind(this);
    this.saveAnswer4 = this.saveAnswer4.bind(this);

    this.readQuestion = this.readQuestion.bind(this);
  }

  componentWillMount() {
    this.setState({ 
      question: quizQuestions[this.state.questionNumber-1].question,
      answer1: quizQuestions[0].answers[0].content,
      answer1Type: quizQuestions[0].answers[0].type,
      answer2: quizQuestions[0].answers[1].content,
      answer2Type: quizQuestions[0].answers[1].type,
      answer3: quizQuestions[0].answers[2].content,
      answer3Type: quizQuestions[0].answers[2].type,
      answer4: quizQuestions[0].answers[3].content,
      answer4Type: quizQuestions[0].answers[3].type,
    });
  }

  /*Revisar a muerte*/

  saveAnswer1(){
    this.setState({
      question: quizQuestions[this.state.questionNumber].question,
      answer1Type: quizQuestions[this.state.questionNumber].answers[0].type,
      answer1: quizQuestions[this.state.questionNumber].answers[0].content,
      answer2Type: quizQuestions[this.state.questionNumber].answers[1].type,
      answer2: quizQuestions[this.state.questionNumber].answers[1].content,
      answer3Type: quizQuestions[this.state.questionNumber].answers[2].type,
      answer3: quizQuestions[this.state.questionNumber].answers[2].content,
      answer4Type: quizQuestions[this.state.questionNumber].answers[3].type,
      answer4: quizQuestions[this.state.questionNumber].answers[3].content
    })
    if(this.state.answer1Type===true){
      this.setState({
        score: this.state.score +1
      });
    }
    if(this.state.questionNumber===10){
        /*En esta línea debería de hacer que se calcule la puntuación y pasar a la página donde se muestra esta
        */
        this.setState({
          questionNumber: this.state.questionNumber-9,
          end: true
        });
      }else{
        this.setState({
          questionNumber: this.state.questionNumber+1
        });
      }
  }

  saveAnswer2(){
    this.setState({
      question: quizQuestions[this.state.questionNumber].question,
      answer1Type: quizQuestions[this.state.questionNumber].answers[0].type,
      answer1: quizQuestions[this.state.questionNumber].answers[0].content,
      answer2Type: quizQuestions[this.state.questionNumber].answers[1].type,
      answer2: quizQuestions[this.state.questionNumber].answers[1].content,
      answer3Type: quizQuestions[this.state.questionNumber].answers[2].type,
      answer3: quizQuestions[this.state.questionNumber].answers[2].content,
      answer4Type: quizQuestions[this.state.questionNumber].answers[3].type,
      answer4: quizQuestions[this.state.questionNumber].answers[3].content
    })
    if(this.state.answer2Type===true){
      this.setState({
        score: this.state.score +1
      });
    }
    if(this.state.questionNumber===10){
        /*En esta línea debería de hacer que se calcule la puntuación y pasar a la página donde se muestra esta
        */
        this.setState({
          questionNumber: this.state.questionNumber-9,
          end: true
        });
      }else{
        this.setState({
          questionNumber: this.state.questionNumber+1
        });
      }
  }
  saveAnswer3(){
    this.setState({
      question: quizQuestions[this.state.questionNumber].question,
      answer1Type: quizQuestions[this.state.questionNumber].answers[0].type,
      answer1: quizQuestions[this.state.questionNumber].answers[0].content,
      answer2Type: quizQuestions[this.state.questionNumber].answers[1].type,
      answer2: quizQuestions[this.state.questionNumber].answers[1].content,
      answer3Type: quizQuestions[this.state.questionNumber].answers[2].type,
      answer3: quizQuestions[this.state.questionNumber].answers[2].content,
      answer4Type: quizQuestions[this.state.questionNumber].answers[3].type,
      answer4: quizQuestions[this.state.questionNumber].answers[3].content
    })
    if(this.state.answer3Type===true){
      this.setState({
        score: this.state.score +1
      });
    }
    if(this.state.questionNumber===10){
        /*En esta línea debería de hacer que se calcule la puntuación y pasar a la página donde se muestra esta
        */
        this.setState({
          questionNumber: this.state.questionNumber-9,
          end: true
        });
      }else{
        this.setState({
          questionNumber: this.state.questionNumber+1
        });
      }
  }
  saveAnswer4(){
    this.setState({
      question: quizQuestions[this.state.questionNumber].question,
      answer1Type: quizQuestions[this.state.questionNumber].answers[0].type,
      answer1: quizQuestions[this.state.questionNumber].answers[0].content,
      answer2Type: quizQuestions[this.state.questionNumber].answers[1].type,
      answer2: quizQuestions[this.state.questionNumber].answers[1].content,
      answer3Type: quizQuestions[this.state.questionNumber].answers[2].type,
      answer3: quizQuestions[this.state.questionNumber].answers[2].content,
      answer4Type: quizQuestions[this.state.questionNumber].answers[3].type,
      answer4: quizQuestions[this.state.questionNumber].answers[3].content
    })
    if(this.state.answer4Type===true){
      this.setState({
        score: this.state.score +1
      });
    }
    if(this.state.questionNumber===10){
        /*En esta línea debería de hacer que se calcule la puntuación y pasar a la página donde se muestra esta
        */
        this.setState({
          questionNumber: this.state.questionNumber-9,
          end: true
        });
      }else{
        this.setState({
          questionNumber: this.state.questionNumber+1
        });
      }
  }

  /*Debería leer la pregunta y las respuestas asociadas
  */

  readQuestion(){
    return (
      "hola"
    );
  }

  readAnswer(){
    return(
      "It is Awesome"
    );
  }


  render() {
    if(this.state.end){
      return(
        <div className="App-intro">
          <h2>
            Thank You for Play
          </h2> 
          <h2>
            Your final score is : {this.state.score}
          </h2>
        </div>
      );
      /*
          El valor de score debe guardarse en la database y poderse pintar luego en ranking
          Boton para volver a la pagina principal
          */
    }else{
      return (
          <div className="App-intro"> 
            <h2> 
              Question {this.state.questionNumber}: {this.state.question}
            </h2>
            <p>
              <button className="Play" onClick={this.saveAnswer1} >
                {this.state.answer1}
              </button> 
              <button className="Play" onClick={this.saveAnswer2} >
                {this.state.answer2}
              </button>          
            </p>
            <p>
              <button className="Play" onClick={this.saveAnswer3}>
                {this.state.answer3}
              </button>
              <button className="Play" onClick={this.saveAnswer4}>
                {this.state.answer4}
              </button>        
            </p>
          </div>
      );
    }
  }
}