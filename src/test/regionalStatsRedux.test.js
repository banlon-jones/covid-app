import regionalStatReducer, { addRegionalStats } from '../redux/regional-stats/regionalStats';

const ADD_STATS = 'regionalStats/ADD_STATS';
const action = {
  type: ADD_STATS,
  payload: { today_confirmed: 5645 },
};
const payload = { today_confirmed: 5645 };

describe('action creation test', () => {
  it('return object', () => {
    expect(addRegionalStats(payload)).toEqual(action);
  });
});

describe('regional stats reducer test', () => {
  it('return initial state', () => {
    expect(regionalStatReducer(undefined, {})).toEqual([]);
  });
  it('return new state', () => {
    expect(regionalStatReducer([], action)).toEqual(action.payload);
  });
});
