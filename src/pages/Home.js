import React from 'react';
import Navbar from '../components/navbar/NavBar';
import GlobalStats from '../components/global-stats/GlobalStats';
import StatByCountryForm from '../components/statsByCountryForm/StatByCountryForm';
import Regions from '../components/regions/Regions';

const Home = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <section>
      <GlobalStats />
    </section>
    <section className="stats">
      <StatByCountryForm />
    </section>
    <section>
      <Regions />
    </section>
  </div>
);

export default Home;
