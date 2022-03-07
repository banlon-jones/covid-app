import React from 'react';
import './regions.css';
import map from './images/emojione-monotone_map-of-japan.svg';

const Regions = (Props) => {
  const { regions } = Props;
  return (
    <div className="region-flex">
      {
      regions.map((item) => (
        <button key={item.id} type="button" className="region" value={item.value}>
          <div>
            <div>
              <img src={map} alt="region map" />
            </div>
            <div>
              <h3>
                {item.id}
              </h3>
            </div>
          </div>
        </button>
      ))
    }
    </div>

  );
};

export default Regions;
