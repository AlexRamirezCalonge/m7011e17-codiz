import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

const prepareBody = (params) => {
  var formBody = [];
    for (var property in params) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    return formBody.join("&");
}


export class LogIn extends Component {

  constructor(props){
    super(props)
    this.state= {
      username: '',
      pass: '' 
    }
    this.TryLog = this.TryLog.bind(this);

  }

  handleNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ pass: event.target.value });
  };

/*
Aqui tendríamos que comprobar que el user y la password están en la base de datos para acceder.
Por ahora pongo uno predefinido
*/

  TryLog = () =>  {
    
      var params = {
        username: this.state.username,
        password: this.state.pass,
      };
      console.log(params);
      const formBody = prepareBody(params);    
      return fetch("https://test.castiello.tk:8443/public/login?username="+this.state.username+"&password="+this.state.pass,{method: "POST"})
      .then((response) => response.json() )
      .then((responseData) => {
        console.log(responseData);
        if(this.state.name==='' || this.state.pass===''){
          alert('EMPTY BOXES, TRY GOING');
        }else if(responseData.success){
          this.props.LogNow();
        }else{
          alert('INCORRECT USERNAME OR PASSWORD')
          console.log("Incorrect login")
        }      
      }).catch(function(e) {
        alert( e.message);
      } )   
/*
    if(this.state.username==='' || this.state.pass===''){
      alert('EMPTY BOXES, TRY GOING');
      return
    }

      fetch('https://test.castiello.tk:8443/public/login?username=Miguel&password=prueba')
      .then( response => response.text()  )
      .then( texto => alert( texto ));
   */     
        
   /* fetch('https://test.castiello.tk:8443/public/login?username='+this.state.name+'&password='+this.state.pass).then(
     
      results => {
        results.json()

      });
*/
    
  }
  
  render() {
    return (
      <div className="App-intro">
        <p>
          <img src={logo} className="Main-logo" alt="logo" />
        </p> 

        <h1>
          Log in to [CodiZ]
        </h1>

          <p className="User">
            <input type="text" value={this.state.username} onChange={this.handleNameChange} placeholder="Username" />
          </p>

          <p className="Password">
            <input type="password" value={this.state.pass} onChange={this.handlePasswordChange} placeholder="Password" />
          </p> 

          <button onClick={this.TryLog}>
            LOG IN
          </button>
          
          <p>
            <a href="http://www.marca.com/">
              You forgot your password?
            </a>
          </p>       
        </div>
    );
  }
}