import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import GamePage from './GamePage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <Link to="games">Game</Link>
        </p>
        <Route path = '/games' component = {GamePage} />
      </div>
    );
  }
}

export default App;
