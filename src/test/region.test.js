import regionReducer, { addRegion } from '../redux/regions/regions';

const ADD_REGION = 'regions/ADD_REGIONS';
const action = {
  type: ADD_REGION,
  payload: [{ today_confirmed: 5645 }],
};
const payload = [{ today_confirmed: 5645 }];

describe('action creator test', () => {
  it('return action', () => {
    expect(addRegion(payload)).toEqual(action);
  });
});

describe('region reducer test', () => {
  it('return initial state', () => {
    expect(regionReducer(undefined, {})).toEqual([]);
  });
  it('return new state', () => {
    expect(regionReducer([], action)).toEqual(action.payload);
  });
});
