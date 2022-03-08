import React from 'react';
import './regionalstats.css';

const RegionalStats = (Props) => {
  const { regionalStats } = Props;
  return (
    <div>
      <div className="breakdown">
        <h3>regional breakdown</h3>
      </div>
      <ul>
        <li>
          <strong> Confirmed Cases </strong>
          <span>
            {regionalStats.today_confirmed}
          </span>
        </li>
        <li>
          <strong> Deaths </strong>
          <span>
            {regionalStats.today_deaths}
          </span>
        </li>
        <li>
          <strong> Recovered </strong>
          <span>
            {regionalStats.today_recovered}
          </span>
        </li>
        <li>
          <strong> Open cases </strong>
          <span>
            {regionalStats.today_new_open_cases}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default RegionalStats;
