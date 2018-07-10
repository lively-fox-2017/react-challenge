import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => (
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
      <div class="navbar-item" href="https://bulma.io">
        <li><Link className="link" to='/'>Home</Link></li>
        <li><Link className="link" to='/photos'>Mars Photos</Link></li>
      </div>        
      </div>
    </nav>
  </header>
)
export default Menu