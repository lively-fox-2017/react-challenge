import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Welcome to React News'
    }
  }



  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} alt="logo" width="5%"/>
            <Link className="navbar-brand" to="/">React News</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
      </div>
    );
  }

}



export default NavBar;