import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import { loadCharities } from './actions/charitiesActions';
import { getAllDonations } from './actions/donationsActions';

import 'toastr/build/toastr.css';

import App from './App';

const store = configureStore(initialState);
store.dispatch(loadCharities());
store.dispatch(getAllDonations());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
