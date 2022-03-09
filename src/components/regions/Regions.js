import React, { useState } from 'react';
import './regions.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import mapicon from './images/emojione-monotone_map-of-japan.svg';
import { getRegionalStat } from '../../redux/regional-stats/regionalStats';

const Regions = (Props) => {
  const { regions } = Props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    dispatch(getRegionalStat(e.target.value));
    navigate(`/stats/${e.target.value}`);
  };
  const [value, setValue] = useState('');
  const filterRegionByName = regions.filter((item) => item.id.match(value));

  const eventHandle = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="sec">
      <div>
        <input className="form-control" type="text" value={value} onChange={eventHandle} placeholder="filter states by Name" />
      </div>
      <div className="region-flex">
        {
          filterRegionByName.map((item) => (
            <div key={item.id} className="region">
              <div>
                <div>
                  <img src={mapicon} alt="region map" />
                </div>
                <div>
                  <h3>
                    {item.id}
                  </h3>
                  <button type="button" value={item.id} onClick={handleClick}>
                    view stats
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Regions;
