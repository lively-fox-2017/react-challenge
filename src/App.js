import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieDetail from './MovieDetail';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="logo">ATOM</span>
          <img src={logo} className="App-logo" alt="logo" />
          <span className="logo">MOVIE</span>
        </header>
        <MovieDetail/>
      </div>
    );
  }
}

export default App;
