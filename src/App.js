import React, { Component } from 'react';
import { NavBar } from './NavBar.js';
import { LogIn } from './LogIn.js';
import { MainContent } from './MainContent.js';
import { Selection } from './Selection.js';
import { SignIn } from './SignIn.js';
import { Question } from './Question.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.homepage = this.homepage.bind(this);
    this.changeLogin = this.changeLogin.bind(this);
    this.changeSignin = this.changeSignin.bind(this);
    this.changeComponent = this.changeComponent.bind(this);
  }

  changeComponent() {
    switch (this.state.id) {
      case 0:
        return (<MainContent />)
      case 1:
        return (<LogIn />);
      case 2:
        return (<SignIn />);
      default:
        return (<MainContent />);
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

  changeSignin() {
    this.setState({ 
      id : 2
    });
  }

  render() {
      return(
        <div className="App">
          <NavBar goSignin= {this.changeSignin} goLogin= {this.changeLogin} home= {this.homepage}/>
          
          {this.changeComponent()}

        </div>

      );
  }
}

export default App;
