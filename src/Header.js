import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component{
  render() {
    return (
      <div>
        <span className="logo">ATOM</span>
        <img src={logo} className="App-logo" alt="logo" />
        <span className="logo">MOVIE</span>
      </div>
    );
  }
}

export default Header;
