import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieDetail from './MovieDetail';
import Header from './Header';
import SearchMovie from './SearchMovie';
import HotMovie from './HotMovie';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App container-fluid">
        <header className="App-header">
          <Header/>
        </header>


          <div>
            <Link to="/"> Home </Link>

            <Route exact path="/" component={ HotMovie }/>
            <Route path="/movie/:id" render={ ({match}) => {return <MovieDetail match = {match}/>} }/>
          </div>


        <div>
          <SearchMovie/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
