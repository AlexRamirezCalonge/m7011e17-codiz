import React, { Component } from 'react';
import './App.css';

export class PlayNow extends Component {
	myClick(){
		alert("Log in first");
	}

	render() {

    	return (
    		<button className="Play" onClick={this.myClick}>
            	  Play Now
            	</button>
    	);
  	}
}