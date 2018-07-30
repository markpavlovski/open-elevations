import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {

  componentWillMount(){
    const openElevations = 'https://api.open-elevation.com/api/v1/lookup'
    axios.post(openElevations, {
    	"locations":
    	[
    		{
    			"latitude": 10,
    			"longitude": 10
    		},
    		{
    			"latitude":20,
    			"longitude": 20
    		},
    		{
    			"latitude":41.161758,
    			"longitude":-8.583933
    		}
    	]
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
