import React from 'react';
import {Link} from 'react-router-dom';

import Logo from './../logo.png'

const Nav = () => {
  return (
    <nav style={style.nav}>
      <img src={Logo} alt='logo'/>
      <div>
        <Link to='/'><span style={style.linkspan}>Recipees</span></Link>
        <Link to='/restaurants'><span style={style.linkspan}>Restaurants</span></Link>
      </div>
    </nav>
  )
}

const style = {
  nav: {
    display: 'flex',
    flexDirection: 'column'
  },
  linkspan: {
    padding: '8px 16px'
  }
}

export default Nav