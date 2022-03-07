import React from 'react';
import './navbar.css';
import back from './images/eva_arrow-ios-back-outline.svg';
import cog from './images/clarity_cog-solid.svg';

function Navbar() {
  return (
    <nav>
      <div>
        <img src={back}/>
      </div>
      <div>
        global stats
      </div>
      <div>
        <img src={cog}/>
      </div>
    </nav>
  )
}

export default Navbar;
