import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import { loadCharities } from './actions/charitiesActions';

import App from './App';

const store = configureStore(initialState);
store.dispatch(loadCharities());

// const store = createStore(function(state, action) {
//   const _state = state == null ? {
//     donate: 0,
//     message: '',
//   } : state;

//   switch (action.type) {
//     case 'UPDATE_TOTAL_DONATE':
//       return Object.assign({}, _state, {
//         donate: _state.donate + action.amount,
//       });
//     case 'UPDATE_MESSAGE':
//       return Object.assign({}, _state, {
//         message: action.message,
//       });

//     default: return _state;
//   }
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
