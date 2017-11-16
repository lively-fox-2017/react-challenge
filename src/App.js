import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import nasa from './reducers/nasa'
import Header from './Header'
import Main from './Main'

import './App.css';
import bulma from '../node_modules/bulma/css/bulma.css'
import style from './style.css'
const store = createStore(nasa)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div>
              <Header/>
              <Main />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;