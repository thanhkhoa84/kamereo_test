import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import { fetchCharities } from '../actions/charitiesActions';
import { getAllDonations } from '../actions/donationsActions';

const configureStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const middlewares = [
    thunk,
  ];

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );

  store.dispatch(fetchCharities());
  store.dispatch(getAllDonations());

  return store;
}

export default configureStore;