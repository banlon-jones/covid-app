import { fetchRegionalStats } from '../../api/api';

const ADD_STATS = 'regionalStats/ADD_STATS';

export const addRegionalStats = (payload) => ({
  type: ADD_STATS,
  payload,
});

// eslint-disable-next-line no-unused-vars
export const getRegionalStat = (region) => async (dispatch) => {
  const data = await fetchRegionalStats(region);
  dispatch(addRegionalStats(data.total));
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
