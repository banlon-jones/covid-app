import React from 'react';
import './statbycountryform.css';
import { useDispatch } from 'react-redux';
import { getRegions } from '../../redux/regions/regions';

const StatByCountryForm = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(getRegions(e.target.value));
  };
  return (
    <div className="country-form">
      <div>
        <h3> STATS BY COUNTRY </h3>
      </div>
      <div>
        <form>
          <select onChange={handleChange}>
            <option value="us"> United state </option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default StatByCountryForm;
