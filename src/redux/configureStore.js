import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import globalStatReducer from './global-stats/globalstats';
import regionReducer from './regions/regions';

const reducer = combineReducers({
  globalStatReducer, regionReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger)),
);

export default store;
