import * as types from './actionTypes';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import * as messageActions from './messageActions';

export const fetchCharitiesSuccess = (charities) => ({
  type: types.FETCH_CHARITIES_SUCCESS,
  charities,
});

export const fetchCharitiesFailure = () => ({
  type: types.FETCH_CHARITIES_FAILURE,
});

export const fetchCharities = (dispatch) => (dispatch) => {
  return fetch('http://localhost:3001/charities')
    .then(function (resp) { return resp.json(); })
    .then(charities => {
      dispatch(fetchCharitiesSuccess(charities));
    })
    .catch(err => {
      dispatch(fetchCharitiesFailure());
      dispatch(messageActions.updateMessage('Failed to load charities'));
      setTimeout(() => {
        dispatch(messageActions.removeMessage());
      }, 1500);
    });
}