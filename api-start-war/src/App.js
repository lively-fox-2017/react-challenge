import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeReact from './components/HomeReact'
import HomeRedux from './components/HomeRedux'
import HomeReactRedux from './components/HomeReactRedux'

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <h1> API starwar </h1>
          <BrowserRouter>
            <div className="container">
              <Link to="/"> Home-React </Link>
              <Link to="/redux"> Home-Redux </Link>
              <Link to="/react-redux"> Home-react-redux </Link>
              <Route exact path="/" component={HomeReact} />
              <Route path="/redux" component={HomeRedux} />
              <Route path="/react-redux" component={HomeReactRedux} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App
