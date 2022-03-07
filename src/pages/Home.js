import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar/NavBar';
import GlobalStats from '../components/global-stats/GlobalStats';
import StatByCountryForm from '../components/statsByCountryForm/StatByCountryForm';
import Regions from '../components/regions/Regions';
import { getGlobalStat } from '../redux/global-stats/globalstats';
import { getRegions } from '../redux/regions/regions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getGlobalStat()); dispatch(getRegions()); }, []);
  const globalstats = useSelector(({ globalStatReducer }) => globalStatReducer);
  const regions = useSelector(({ regionReducer }) => regionReducer);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section>
        <GlobalStats stats={globalstats} />
      </section>
      <section className="stats">
        <StatByCountryForm />
      </section>
      <section>
        <Regions regions={regions} />
      </section>
    </div>
  );
};

export default Home;
