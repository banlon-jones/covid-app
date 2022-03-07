const GLOBALSTATS = 'https://api.covid19tracking.narrativa.com/api/2022-03-07';
const REGIONS = 'https://api.covid19tracking.narrativa.com/api/2022-03-07/country';

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
