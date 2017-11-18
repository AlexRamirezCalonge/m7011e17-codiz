import React, { Component } from 'react';
import { NavBar } from './NavBar.js';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-intro">
          <p >
            <img src={logo} className="Main-logo" alt="logo" />
          </p>  
          <h1> 
            Welcome to [Codiz]
          </h1>

          <p>
            <button className="Play">
              Play Now
            </button>
          </p>

          <p>
            <button className="PlayNoRegister" onClick="">
              Play without registration
            </button>
          </p> 

          Quiero esto en la pantalla de Log in

          <p className="User">
            <input type="text"
             placeholder="Username" />
          </p>

          <p className="Password">
            <input type="password"
             placeholder="Password"/>
          </p> 

          <p>
            <a href="http://www.marca.com/">
            You forgot your password?</a>
          </p>

          Quiero esto en una pantalla separada. Será la de selecionar tema y dificultad  

            <p>
                Select the theme
              </p>
              <select id="difficulties">
                <option value="basic-coding">
                  Basic Coding
                </option>

                <option value="java-Noob">
                  JavaScript for Noobs
                </option>

                <option value="kademlia">
                  Kademlia Things
                </option>
              </select>
            <p>
              Select the dfficulty
            </p>
            <select id="difficulties">
              <option value="Easy">
                Easy
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="Hard">
                Hard
              </option>
            </select>
        </div>
      </div>
    );
  }
}

export default App;
