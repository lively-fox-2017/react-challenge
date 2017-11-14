import React, { Component } from 'react';
import './App.css';
import MovieDetail from './MovieDetail';
import Header from './Header';
import SearchMovie from './SearchMovie';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <header className="App-header">
          <Header/>
        </header>
        <MovieDetail/>
        <div>
          <SearchMovie/>
        </div>
      </div>
    );
  }
}

export default App;
