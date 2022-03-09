import { fetchRegions } from '../../api/api';

const ADD_REGION = 'regions/ADD_REGIONS';

const initialState = [];

export const addRegion = (payload) => ({
  type: ADD_REGION,
  payload,
});

// eslint-disable-next-line no-unused-vars
export const getRegions = (country) => async (dispatch) => {
  const data = await fetchRegions(country);
  dispatch(addRegion(data.dates['2022-03-07'].countries.US.regions));
  // console.log(data.dates['2022-03-07'].countries.US.regions);
};

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REGION:
      return [...action.payload];
    default:
      return state;
  }
};

export default regionReducer;
