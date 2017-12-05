import React, { Component } from 'react';
import './App.css';

export class Ranking extends Component {

  constructor(props){
    super(props)
    this.Selection = this.Selection.bind(this);
    this.myClick = this.myClick.bind(this);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    //upload the image selected at the database
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  myClick(){
    if(this.props.Log()){
      this.Selection();
    }
  }

  Selection(){
    this.props.goSelection();
  }

  GetRankingUser = () =>  {

  //Hay que pasar el usernameId en función del user
    var params = {
        usernameId: this.state.usernameId,
    };
    console.log(params);
    
      return fetch("https://test.castiello.tk:8443//private/score/getByUser?user="+this.state.usernameId,
          {
            method: "GET",
            credentials: 'include'
          }
        )
      .then((response) => response.json() )
      .then((responseData) => {
        console.log(responseData);
        //Sacar el valor de la base de datos y pintarla
      }).catch(function(e) {
        alert( e.message);
      } )       
  }
  

  GetRankingTop = () =>  {
    
      return fetch("https://test.castiello.tk:8443//private/score/top",
          {
            method: "GET",
            credentials: 'include'
          }
        )
      .then((response) => response.json() )
      .then((responseData) => {
        console.log(responseData);
        //Sacar el valor de la base de datos y pintarla
      }).catch(function(e) {
        alert( e.message);
      } )       
  }

















  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="avatar"/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
        <div className="App-intro">
          <p >
            <div className="imgPreview">
              {$imagePreview}
            </div>
          </p>  

          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <p>
              <button className="submitButton" 
                type="submit" 
                onClick={(e)=>this._handleSubmit(e)}>Upload Avatar Image</button>
            </p>
          </form>

          <h2> 
            This is your scores
          </h2>
          <p>
            
            Aquí se pone la función que llama a los scores del user
          </p>
          
        </div>
    );
  }
}
