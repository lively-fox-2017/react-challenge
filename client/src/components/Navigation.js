import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
            <div className="navbar-header">
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                </button>
                {/* <a href="#" className="navbar-brand">Brand</a> */}
            </div>
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category">Category</Link></li>
                </ul>
                {/* <form class="navbar-form navbar-left">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search"/>
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
                    </span>
                  </div>
                </form> */}
            </div>
        </nav>
      </div>
    )
  }
}

export default Navigation
