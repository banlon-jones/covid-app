import React from 'react';
import './regions.css';
import map from './images/emojione-monotone_map-of-japan.svg';
import { NavLink } from 'react-router-dom';

const Regions = () => (
  <div className="region-flex">
    <div className="region">
      <NavLink to="/stats/ex1">
        <div>
          <img src={map} alt="region map" />
        </div>
        <div>
          <h3> Namew </h3>
        </div>
      </NavLink>
    </div>
    <div className="region">
      <NavLink to="/stats/region">
        <div>
          <img src={map} alt="region map" />
        </div>
        <div>
          <h3> Namew </h3>
        </div>
      </NavLink>
    </div>
  </div>

);

export default Regions;
