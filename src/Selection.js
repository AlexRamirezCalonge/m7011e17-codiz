import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class Selection extends Component {
  constructor(props){
    super(props)
    this.state={
      themes: [],
      difficulties: [],
      themeId: 0,
      difficultyId: 0
    }
    this.Question = this.Question.bind(this);
    this.somethingHappen = this.somethingHappen.bind(this);
  }


  componentWillMount(){
    fetch("https://test.castiello.tk:8443/private/theme/getAll",{
      method: "GET",
      credentials: 'include'
    })
    .then((response) => {
      return response.json()
    })
    .then((themes) => {
      this.setState({ themes: themes })
    })

    fetch("https://test.castiello.tk:8443/private/difficulty/getAll",{
      method: "GET",
      credentials: 'include'
    })
    .then((response) => {
      return response.json()
    })
    .then((difficulties) => {
      this.setState({ difficulties: difficulties })
    })

  }

  createThemeOption(){
    var array = [];
    for(var i=0; i<this.state.themes.length; i++){
      array.push(
        <option key={this.state.themes[i].themeID} value={this.state.themes[i].themeID}>
          {this.state.themes[i].title}
        </option>
      )
    }
    return array;
  }

createDifficultiesOption(){
    var array = [];
    for(var i=0; i<this.state.difficulties.length; i++){
      array.push(
        <option key={this.state.difficulties[i].difficultyID} value={this.state.difficulties[i].difficultyID}>
          {this.state.difficulties[i].title}
        </option>
      )
    }
    return array;
  }

  Question() {
    if(this.state.difficultyId===0 || this.state.themeId===0){
      this.setState(
        {happen: "INCORRECT DIFFICULTY OR THEME, TRY AGAIN"}
      );
    }else{
      this.props.goQuestion();       
    }
  }

  somethingHappen() {
    return(
      this.state.happen
    );
  }

  handleThemeChange = (event)=>{
    this.setState({themeId: event.target.value});
    this.props.handleThemeChange(event.target.value);
  }

  handleDifficultyChange = (event)=>{
    this.setState({difficultyId: event.target.value});
    this.props.handleDifficultyChange(event.target.value);
  }

  render() {
    if(this.state.themes.length > 0){
      return (
        <div className="App-intro">
          <p>
            <img src={logo} className="Main-logo" alt="logo" />
          </p> 
          <div class="form">
            <h2>
              Select the theme
            </h2>
            <select id="theme" onChange={this.handleThemeChange} className="wrapper-dropdown-1" tabindex="1">

              <option value="0">
                Select: Theme
              </option>

              {this.createThemeOption()}

            </select>

            <h2>
              Select the difficulty
            </h2>
            <select id="difficulties" onChange={this.handleDifficultyChange}>

              <option value="0">
                Select: Difficulty
              </option>

              {this.createDifficultiesOption()}

            </select>
            <p className="Alert">
              {this.somethingHappen()}
            </p>
            <p>
              <button className="StartPlay" onClick={this.Question}>
                START
              </button>
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className = "App-intro">
        <p>
          <img src={logo} className="Main-logo" alt="logo" />
        </p> 
        <h2>LOADING</h2>
      </div>
      );
  }
}