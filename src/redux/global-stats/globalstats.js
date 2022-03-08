import { fetchGlobalStats } from '../../api/api';

const ADD_GLOBAL_STATS = 'globalstats/ADD_STATS';

// action creator

const addGlobalStats = (payload) => ({
  type: ADD_GLOBAL_STATS,
  payload,
});

export const getGlobalStat = () => async (dispatch) => {
  const data = await fetchGlobalStats();
  dispatch(addGlobalStats(data.total));
};

const globalStatReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GLOBAL_STATS:
      return action.payload;
    default:
      return state;
  }
};

export default globalStatReducer;
