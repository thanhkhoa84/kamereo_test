import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const middlewares = [
    thunk,
  ];

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
}

export default configureStore;