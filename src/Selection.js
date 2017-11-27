import React, { Component } from 'react';
import './App.css';

export class Selection extends Component {
  render() {
    return (
      <div className = "App-intro">
        <h2>
          Select the theme
        </h2>

        <select id="difficulties">

          <option value="1">
            Basic Coding
          </option>

          <option value="2">
            JavaScript Noobs
          </option>

          <option value="3">
            Kademlia Things
          </option>

        </select>

        <h2>
          Select the dfficulty
        </h2>

        <select id="difficulties">

          <option value="1">
            Easy
          </option>

          <option value="2">
            Medium
          </option>

          <option value="3">
            Hard
          </option>

        </select>
      </div>
    );
  }
}