import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

export class SignIn extends Component {

  constructor(props){
    super(props)
    this.state= {
      name: '',
      pass: '',
      email: '',
      repeatPass: ''
    }
    this.TrySignIn = this.TrySignIn.bind(this);
    this.signComplete = this.signComplete.bind(this);
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleRepeatPassChange = (event) => {
    this.setState({ repeatPass: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ pass: event.target.value });
  };

  /*
  Lo suyo sería que esta función cogiese los datos puestos en las cajas y mandase un correo a la direccion introducida con
  el usuario y la contraseña, además de escribirlo en la base de datos
  */

  signComplete(){
    this.props.Signed();
  }

  /*
  Habría que meter varias condiciones:
    Que todos los campos estén rellenados --> Hecho
    Que las dos contraseñas sean las mismas --> Hecho
    Que no se utilice el mismo nick y el mismo email que ya se use --> Hecho
  Modificar lo del usuario y email con los que lea de la base de datos
  */

  TrySignIn(){
    if(this.state.name==='' || this.state.pass==='' || this.state.email==='' || this.state.repeatPass===''){
      alert('EMPTY BOXES, TRY AGAIN');
    }else if(this.state.name==='Alex' || this.state.email==='alex.ramirez.calonge@gmail.com'){
      alert('USERNAME OR EMAIL ALREADY USED, TRY AGAIN');
    }else if(this.state.pass !== this.state.repeatPass){
      alert('IT IS NOT THE SAME PASSWORD, TRY AGAIN');
    }else{
      alert('YOU HAD BEEN SIGNED SUCCESFULLY. CHECK YOUR EMAIL');
      {this.signComplete()}
    }
  }
  
  render() {
    return (
      <div className="App-intro">
        <p>
          <img src={logo} className="Main-logo" alt="logo" />
        </p> 

        <h1>
          Create a [CodiZ] account
        </h1>

          <p className="User">
            <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Username" />
          </p>

          <p className="Password">
            <input type="password" value={this.state.pass} onChange={this.handlePasswordChange} placeholder="Password"/>
          </p> 

          <p className="RPassword">
            <input type="password" value={this.state.repeatPass} onChange={this.handleRepeatPassChange} placeholder="Repeat Password"/>
          </p> 

          <p className="Email">
            <input type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email"/>
          </p> 
          <button className="Enter" onClick={this.TrySignIn}>
            SIGN IN
          </button> 
        </div>
    );
  }
}