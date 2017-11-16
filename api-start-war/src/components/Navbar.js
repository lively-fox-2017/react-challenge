import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component{
  render(){
    return (
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">WebSiteName</a>
          </div>
          <ul class="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topic">Tpoic</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
