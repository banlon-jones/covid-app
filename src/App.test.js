import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  globalStatReducer: {
    today_confirmed: 449087644,
    today_deaths: 6013282,
    today_new_confirmed: 2096006,
    today_new_deaths: 10283,
    today_new_open_cases: 2015666,
    today_new_recovered: 70057,
    today_open_cases: 289677719,
    today_recovered: 153396643,
  },
  regionReducer: [
    { id: 'washington' },
  ],
  regionalStatReducer: {
    today_confirmed: 449087644,
    today_deaths: 6013282,
    today_new_confirmed: 2096006,
    today_new_deaths: 10283,
    today_new_open_cases: 2015666,
    today_new_recovered: 70057,
    today_open_cases: 289677719,
    today_recovered: 153396643,
  },
};

const store = mockStore(initialState);

test('renders Global Stats', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  screen.getByText('global stats');
});
test('test', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  fireEvent.click(screen.getByText('view stats'));
  screen.getByText('regional breakdown');
});
