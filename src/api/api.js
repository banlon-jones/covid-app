const GLOBALSTATS = 'https://api.covid19tracking.narrativa.com/api/2022-03-08';
const REGIONS = 'https://api.covid19tracking.narrativa.com/api/2022-03-07/country';
const REGIONALSTATS = 'https://api.covid19tracking.narrativa.com/api/2022-03-07/country/us/region';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchRegions = (country = 'us') => getData(`${REGIONS}/${country}`);

export const fetchGlobalStats = () => getData(GLOBALSTATS);

export const fetchRegionalStats = (region) => getData(`${REGIONALSTATS}/${region}`);
