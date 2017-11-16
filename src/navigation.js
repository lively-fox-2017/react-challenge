import React from 'react'
import logo from './images/logo.png';

function Navigation () {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span style={{fontSize: 28 + 'px', color: 'white'}}>News Headline</span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
