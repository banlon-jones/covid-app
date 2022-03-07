import React from 'react';
import './globalstats.css';
import globe from './images/emojione-monotone_globe-showing-europe-africa.svg';

const GlobalStats = (Props) => {
  const { stats } = Props;
  return (
    <div className="hero">
      <div>
        <img src={globe} alt="globe" />
      </div>
      <div>
        <div className="confirmed-case">
          <h3> Cases </h3>
          <small>
            {stats.today_confirmed}
          </small>
        </div>
        <div className="confirmed-case">
          <h3> death </h3>
          <small>
            {stats.today_deaths}
          </small>
        </div>
        <div className="confirmed-case">
          <h3> Recovered </h3>
          <small>
            {stats.today_recovered}
          </small>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
