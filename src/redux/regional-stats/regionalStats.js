import { fetchRegionalStats } from '../../api/api';

const ADD_STATS = 'regionalStats/ADD_STATS';

export const addRegionalStats = (payload) => ({
  type: ADD_STATS,
  payload,
});

export const getRegionalStat = (region) => async (dispatch) => {
  const data = await fetchRegionalStats(region);
  // console.log(data.dates['2022-03-07'].countries.US.regions[0]);
  dispatch(addRegionalStats(data.dates['2022-03-07'].countries.US.regions[0]));
};

const regionalStatReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STATS:
      return action.payload;
    default:
      return state;
  }
};

export default regionalStatReducer;
