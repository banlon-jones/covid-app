import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import globalStatReducer from './global-stats/globalstats';
import regionReducer from './regions/regions';
import regionalStatReducer from './regional-stats/regionalStats';

const reducer = combineReducers({
  globalStatReducer, regionReducer, regionalStatReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger)),
);

export default store;
