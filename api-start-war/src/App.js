import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import axios from 'axios'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Topic from './components/Topic'

export default class App extends Component {

  render () {
    return (
      <BrowserRouter>
        <div>

          <Navbar/>
          <div class="container">
            <Route exact path="/" component={Home} />
            <Route path="/topic" component={Topic} />
          </div>
        </div>
      </BrowserRouter>
    )
  }

}
