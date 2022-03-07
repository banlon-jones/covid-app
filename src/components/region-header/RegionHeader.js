import React from 'react';
import region from '../regions/images/emojione-monotone_map-of-japan.svg';

const RegionHeader = () => (
  <div className="hero">
    <div>
      <img src={region} alt="globe" />
    </div>
    <div>
      <div className="confirmed-case">
        <h1> Region name </h1>
        <small> 1225445 </small>
      </div>
    </div>
  </div>
);

export default RegionHeader;
