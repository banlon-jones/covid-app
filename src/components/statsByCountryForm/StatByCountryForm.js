import React from 'react';
import './statbycountryform.css';

const StatByCountryForm = () => (
  <div className="country-form">
    <div>
      <h3> STATS BY COUNTRY </h3>
    </div>
    <div>
      <form>
        <select>
          <option value="spain"> Spain </option>
          <option value="us"> United state </option>
          <option value="south_africa"> South Africa </option>
        </select>
      </form>
    </div>
  </div>
);

export default StatByCountryForm;
