import React, { Component } from 'react';
import { NavBar } from './NavBar.js';
import { NavBarLog } from './NavBarLog.js';
import { LogIn } from './LogIn.js';
import { MainContent } from './MainContent.js';
import { Selection } from './Selection.js';
import { SignIn } from './SignIn.js';
import { Question } from './Question.js';
import { LogOut } from './LogOut.js';
import { Ranking } from './Ranking.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
    this.homepage = this.homepage.bind(this);
    this.changeLogin = this.changeLogin.bind(this);
    this.changeSignin = this.changeSignin.bind(this);
    this.changeComponent = this.changeComponent.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
    this.changeQuestion = this.changeQuestion.bind(this);
    this.changeLogout = this.changeLogout.bind(this);
    this.changeRanking = this.changeRanking.bind(this);
    this.logged = this.logged.bind(this);
    this.trueLog = this.trueLog.bind(this);
  }

  changeComponent() {
    switch (this.state.id) {
      case 0:
        return (<MainContent goSelection= {this.changeSelection} Log={this.logged}/>)
      case 1:
        return (<LogIn LogNow={this.trueLog}/>);
      case 2:
        return (<SignIn Signed={this.homepage}/>);
      case 3:
        return (<Selection goQuestion= {this.changeQuestion}/>);
      case 4:
        return (<Question />);
      case 5:
        return (<LogOut LogNow={this.trueLog} Nothing={this.homepage}/>);
      case 6:
        return (<Ranking />);
      default:
        return (<MainContent goSelection= {this.changeSelection} Log={this.logged}/>);
    }
  }

  logged(){
    if(!this.state.isLogged){
      alert("LOG IN FIRST, PLEASE")
    }else{
      this.changeSelection();
    }
  } 

  homepage() {
    this.setState({ 
      id : 0
    });
  }

  changeLogin() {
    this.setState({ 
      id : 1
    });
  }

  trueLog(){
    this.setState({
      isLogged: !this.state.isLogged,
      id: 0
    });
  }

  changeSignin() {
    this.setState({ 
      id : 2
    });
  }

  changeSelection() {
    this.setState({
      id : 3
    });
  }

  changeQuestion() {
    this.setState({
      id : 4
    });
  }

  changeLogout() {
    this.setState({ 
      id : 5
    });
  } 

  changeRanking() {
    this.setState({ 
      id : 6
    });
  }  

  render() {
      return(
        <div className="App">
          {!this.state.isLogged ? <NavBar goSignin= {this.changeSignin} goLogin= {this.changeLogin} home= {this.homepage}/> : 
          <NavBarLog goRanking= {this.changeRanking} goLogout= {this.changeLogout} home= {this.homepage}/>}

          {this.changeComponent()}

        </div>

      );
  }
}

export default App;