import React from 'react';
import region from '../regions/images/emojione-monotone_map-of-japan.svg';

const RegionHeader = (Props) => {
  const { name } = Props;
  return (
    <div className="hero">
      <div>
        <img src={region} alt="globe" />
      </div>
      <div>
        <div className="confirmed-case">
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default RegionHeader;
