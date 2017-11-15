import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Main from './Main'

import './App.css';
import bulma from '../node_modules/bulma/css/bulma.css'
import style from './style.css'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Header/>
              <Main />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;