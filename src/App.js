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
            <Link to="/"><h4> <i className="fa fa-home" aria-hidden="true"></i><strong>HOME</strong></h4> </Link>

            <Route exact path="/" component={ HotMovie }/>
            <Route path="/movie/:id" component={ MovieDetail }/>
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
