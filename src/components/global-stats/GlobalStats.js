import React from 'react';
import './globalstats.css';
import globe from './images/emojione-monotone_globe-showing-europe-africa.svg';

const GlobalStats = () => (
  <div className="hero">
    <div>
      <img src={globe} alt="globe" />
    </div>
    <div>
      <div className="confirmed-case">
        <h3> Cases </h3>
        <small> 1225445 </small>
      </div>
      <div className="confirmed-case">
        <h3> death </h3>
        <small> 1445 </small>
      </div>
      <div className="confirmed-case">
        <h3> Recovered </h3>
        <small> 1422545 </small>
      </div>
    </div>
  </div>
);

export default GlobalStats;
