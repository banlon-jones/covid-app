import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import back from './images/eva_arrow-ios-back-outline.svg';
import cog from './images/clarity_cog-solid.svg';

function Navbar() {
  return (
    <nav>
      <div>
        <NavLink to="/">
          <img src={back} alt="back button" />
        </NavLink>
      </div>
      <div>
        global stats
      </div>
      <div>
        <img src={cog} alt="settings button" />
      </div>
    </nav>
  );
}

export default Navbar;
