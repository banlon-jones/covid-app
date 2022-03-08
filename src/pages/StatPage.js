import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar/NavBar';
import RegionHeader from '../components/region-header/RegionHeader';
import RegionalStats from '../components/regional-stat/RegionalStat';

const StatsPage = () => {
  const regionalStats = useSelector(({ regionalStatReducer }) => regionalStatReducer);
  const { region } = useParams();
  return (
    <div>
      <div>
        <header>
          <Navbar />
        </header>
        <section>
          <RegionHeader name={region} />
        </section>
        <section>
          <RegionalStats regionalStats={regionalStats} />
        </section>
      </div>
    </div>
  );
};

export default StatsPage;
