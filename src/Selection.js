import React, { Component } from 'react';
import './App.css';

export class Selection extends Component {
  constructor(props){
    super(props)
    this.state={
      themeId: 0,
      difficultyId: 0
    }
    this.Question = this.Question.bind(this);
  }

  Question() {
    this.props.goQuestion();
  }

  handleThemeChange = (event) => {
    this.setState({themeId: event.target.value});
  };

  handleDifficultyChange = (event) => {
    this.setState({difficultyId: event.target.value});
  };

  render() {
    return (
      <div className = "App-intro">
        <h2>
          Select the theme
        </h2>

        <select id="theme" onChange={this.handleThemeChange}>

          <option value="0">
            Select one option
          </option>

          <option value="1">
            1. Basic Coding
          </option>

          <option value="2">
            2. JavaScript
          </option>

          <option value="3">
            3. XML
          </option>

        </select>

        <h2>
          Select the dfficulty
        </h2>

        <select id="difficulties" onChange={this.handleDifficultyChange}>

          <option value="0">
            Select one option
          </option>

          <option value="1">
            1. Easy
          </option>

          <option value="2">
            2. Medium
          </option>

          <option value="3">
            3. Hard
          </option>

        </select>
        <p>
          You choose theme number: {this.state.themeId} 
        </p>
        <p>
          You choose difficulty level: {this.state.difficultyId}
        </p>
        <p>
          <button className="StartPlay" onClick={this.Question}>
            START
          </button>
        </p>
      </div>
    );
  }
}