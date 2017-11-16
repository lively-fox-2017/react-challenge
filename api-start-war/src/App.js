import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeReact from './components/HomeReact'
// import HomeRedux from './components/HomeRedux'
// import HomeReactRedux from './components/HomeReactRedux'
// import { Provider } from 'react-redux'
// import store from './store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BrowserRouter>
          <div className="container">
            <Link to="/">HomeReact</Link>
            <Route exact path="/" component={HomeReact} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
