import { fetchGlobalStats } from '../../api/api';

const ADD_GLOBAL_STATS = 'globalstats/ADD_STATS';

const initialState = [];

// action creator

// eslint-disable-next-line no-unused-vars
const addGlobalStats = (payload) => ({
  type: ADD_GLOBAL_STATS,
  payload,
});

// eslint-disable-next-line no-unused-vars
export const getGlobalStat = () => async (dispatch) => {
  const data = await fetchGlobalStats();
  dispatch(addGlobalStats(data.total));
};

const globalStatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GLOBAL_STATS:
      return action.payload;
    default:
      return state;
  }
};

export default globalStatReducer;
