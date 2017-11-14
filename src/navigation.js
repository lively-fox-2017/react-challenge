import React from 'react'
import logo from './images/logo.png';

function Navigation () {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img src={logo} className="App-logo" alt="logo" />
          <span style={{fontSize: 28 + 'px', color: 'white'}}>News Site boy</span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
