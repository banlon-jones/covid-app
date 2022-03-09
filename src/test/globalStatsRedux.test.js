import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import globalStatReducer, { addGlobalStats, getGlobalStat } from '../redux/global-stats/globalstats';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const ADD_GLOBAL_STATS = 'globalstats/ADD_STATS';
const action = {
  type: ADD_GLOBAL_STATS,
  payload: { today_confirmed: 5645 },
};
describe('Global stats action creator test', () => {
  const payload = { today_confirmed: 5645 };
  it('should return action object', () => {
    const obj = addGlobalStats(payload);
    expect(obj).toEqual(action);
  });
});

it('should execute fetch data', () => {
  const store = mockStore({});
  // return promise
  store.dispatch(getGlobalStat());
  const actions = store.getActions();
  expect(actions).toEqual([]);
});

describe('Global stats reducer test', () => {
  const initialState = [];
  it('should return iniitial state', () => {
    expect(globalStatReducer(undefined, {})).toEqual(initialState);
  });
  it('return new state', () => {
    expect(globalStatReducer([], action)).toEqual(action.payload);
  });
});
