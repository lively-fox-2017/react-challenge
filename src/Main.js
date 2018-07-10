import React from 'react'
import Home from './components/Home'
import Photos from './components/Photos'
import Detail from './components/Detail'

import { Route } from 'react-router-dom'
// import bulma from '../node_modules/bulma/css/bulma.css'
// import style from './style.css'

const Main = () => (
  <div className="container">
    <Route exact path='/' component={Home} />
    <Route path='/photos' component={Photos} />
    <Route path='/news/:id' render={props => <Detail {...props}/> }></Route>
  </div>
)
export default Main