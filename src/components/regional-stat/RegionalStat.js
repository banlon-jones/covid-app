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
          <strong> Confirmed New Cases </strong>
          <span>
            {regionalStats.today_new_confirmed}
          </span>
        </li>
        <li>
          <strong> New Deaths </strong>
          <span>
            {regionalStats.today_new_deaths}
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
            {regionalStats.today_open_cases}
          </span>
        </li>
        <li>
          <strong> New Open cases </strong>
          <span>
            {regionalStats.today_new_open_cases}
          </span>
        </li>
        <li>
          <strong> Recovered cases </strong>
          <span>
            {regionalStats.today_recovered}
          </span>
        </li>
        <li>
          <strong> Hospitalized cases </strong>
          <span>
            {regionalStats.today_total_hospitalised_patients}
          </span>
        </li>
        <li>
          <strong> tests </strong>
          <span>
            {regionalStats.today_tests}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default RegionalStats;
