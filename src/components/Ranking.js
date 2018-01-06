import React, { Component } from 'react';
import logo from './logo.Bv9ettdV9dsBUGw0pY';
import './App.css';

class Ranking extends Component {

  constructor(props){
    super(props)
    this.Selection = this.Selection.bind(this);
    this.myClick = this.myClick.bind(this);
    this.state = {
      scores : [],
      topScore : [],
      file: '',
      imagePreviewUrl: ''
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("file",this.state.file);
    formData.append("extension",".png");
      return fetch("https://test.castiello.tk:8443/private/user/setAvatar",
          {
            method: "POST",
            credentials: 'include',
            mode: "no-cors",
            //headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: formData
          }
        )
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

  componentWillMount() {
    
    fetch("https://test.castiello.tk:8443/private/score/getByUser",
      {
        method: "GET",
        credentials: 'include'
      }
    )
    .then((response) => {
      return response.json() 
    })
    .then((scoresList) => {
      this.setState({ scores: scoresList })
    })   

    fetch("https://test.castiello.tk:8443/private/score/top",
      {
        method: "GET",
        credentials: 'include'
      }
    )
    .then((response) => {
      return response.json() 
    })
    .then((topList) => {
      console.log(topList);
      this.setState({ topScore: topList })
    }) 


    fetch("https://test.castiello.tk:8443/private/user/getAvatar",
      {
        method: "GET",
        credentials: 'include',
        headers: {"Accept": "application/octet-stream"}
      }
    )
    .then((response) => {
      console.log(response.body)
      return response.blob();
    })
    .then((image) => {
      console.log(image)
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({
          imagePreviewUrl: reader.result
        });
      }
     // console.log(this.state.imagePreviewUrl)
      reader.readAsDataURL(image)
    })

  }
  
  createUserScores(){
    var array = [];
    for(var i=0; i<this.state.scores.length; i++){
      array.push(
        <tr key={this.state.scores[i].answersRight} value={this.state.scores[i].scoreID}>
          <td>{this.state.scores[i].quiz.theme.title}</td>
          <td>{this.state.scores[i].quiz.difficulty.title}</td>
          <td>{this.state.scores[i].answersRight}</td>
        </tr>
      )
    }
    return array;
  }

createTopScores(){
    var array = [];
    for(var i=0; i<this.state.topScore.length; i++){
      array.push(
        <tr key={this.state.topScore[i].answersRight} value={this.state.topScore[i].scoreID}>
          <td>{this.state.topScore[i][0]}</td>
          <td>{this.state.topScore[i][1]}</td>
        </tr>
      )
    }
    return array;
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="Avatar" src={imagePreviewUrl} alt="avatar"/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    if(this.state.scores.length >= 0 || this.state.topScore.length >= 0){
    return (  
        <div className="App-intro">
            {$imagePreview}
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <p>
              <button className="submitButton" 
                type="submit" 
                onClick={(e)=>this._handleSubmit(e)}>Upload Avatar Image
              </button>
            </p>
          </form>
          <h2> 
            Your scores
          </h2>
          <table>
            <tr>
            </tr>
            <tr> 
              <th>Theme</th>
              <th>Difficulty</th>
              <th>Score</th>
            </tr>
            {this.createUserScores()}
          </table>
          <h2> 
            TOP users
          </h2>
          <table>
            <tr> 
              <th>User</th>
              <th>Score</th>
            </tr>
            {this.createTopScores()}
          </table>
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

export default Ranking