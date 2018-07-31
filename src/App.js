import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ElevationService from './components/ElevationService.js'


class App extends Component {

  componentWillMount(){

    ElevationService.request()
    // const openElevations = 'https://api.open-elevation.com/api/v1/lookup'
    // const anchorLocation = {
    //   latitude: 47.668939,
    //   longitude: -122.384951
    // }
    //
    // const reqs = [...Array(10)].map(req => axios.post(openElevations, {
    // 	"locations":
    // 	[...Array(20)].map(el=>anchorLocation)
    // }))
    //
    // Promise.all(reqs)
    // .then(responses => {
    //   console.log(responses.length)
    //   responses.forEach(response =>
    //   console.log(response.data.results)
    // )})
    // .catch(function (error) {
    //   console.log(error)
    // })
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
