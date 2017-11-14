import React from 'react';
import {Link} from 'react-router-dom';

import Logo from './../logo.png'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <img src={Logo} alt='logo'/>
      </Link>
    </nav>
  )
}

export default Nav