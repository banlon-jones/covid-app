import React from 'react';
import Navbar from '../components/navbar/NavBar';
import RegionHeader from '../components/region-header/RegionHeader';
import RegionalStats from '../components/regional-stat/RegionalStat';

const StatsPage = () => (
  <div>
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <RegionHeader />
      </section>
      <section>
        <RegionalStats />
      </section>
    </div>
  </div>
);

export default StatsPage;
