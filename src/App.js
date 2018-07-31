import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ElevationService from './components/ElevationService.js'


class App extends Component {

  componentWillMount(){

    ElevationService.request()
  
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
