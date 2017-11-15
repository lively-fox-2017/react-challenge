//Dependencies
import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import ReduxOnly from './ReduxOnly'
import ReduxReact from './ReduxReact'

import logo from './logo.svg';

//Css File
import './App.css';
import './style.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App" style={{overflow:'hidden', width:'100%'}}>
        <header className="App-header">
          <Link to={'/'}><img src={logo} className="App-logo" alt="logo"/></Link>
          <h1 className="App-title">Welcome to React Weather</h1>
        </header>
        <Route exact path="/" render={() => <Redirect to="/react" />}/>
        <Route path="/redux" render={()=><ReduxOnly/>}/>
        <Route path="/react" render={()=><ReduxReact/>}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
