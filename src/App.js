import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import HeroRecentMatches from './components/HeroRecentMatches';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/recent-matches/:id" component={HeroRecentMatches}/>
        </div>
      </Router>
    );
  }
}

export default App;
