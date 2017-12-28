import React, { Component } from 'react';
import NavBar from './NavBar'
import NavBarLog from './NavBarLog'
import { Switch, Route } from 'react-router-dom'
import LogIn from './LogIn'
import SignIn from './SignIn'
import MainContent from './MainContent'
import Ranking from './Ranking'
import Question from './Question'
import Selection from './Selection'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      themeId: 0,     
      difficultyId: 0
    }
    this.trueLog = this.trueLog.bind(this);
  }

  handleThemeChange = (themeId) => {
    this.setState({themeId: themeId});
  };

  handleDifficultyChange = (difficultyId) => {
    this.setState({difficultyId: difficultyId});
  };
     

  trueLog () {
    this.setState({
      isLogged: !this.state.isLogged
    });
  }

  render(){
  	return(
  	<div className="App"> 

  		{!this.state.isLogged ? <NavBar /> : <NavBarLog isLogged = {this.trueLog}/>}
			<Switch>
		      <Route exact path='/' render={(props) => (<MainContent {...props} checkLogged = {this.state.isLogged}/>)}/>
		      <Route path='/login' render={(props) => (<LogIn {...props} isLogged = {this.trueLog}/>)} />
		      <Route path='/signin' component={SignIn}/>
		      <Route path='/ranking' component={Ranking}/>
		      <Route path='/selection' render={(props) => (<Selection {...props} themeId={this.state.themeId} difficultyId={this.state.difficultyId} 
         		handleThemeChange={this.handleThemeChange} handleDifficultyChange={this.handleDifficultyChange} />)}/>
		      <Route path='/question' render={(props) => (<Question {...props} themeId={this.state.themeId} difficultyId={this.state.difficultyId} />)}/>
		    </Switch>  	
	</div>
	);
  }
}

export default App
