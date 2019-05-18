import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

export function loadCharitiesSuccess(charities) {
  return {
    type: types.LOAD_CHARITIES_SUCCESS,
    charities,
  }
}

export function loadCharities(dispatch) {
  return function (dispatch) {
    return fetch('http://localhost:3001/charities')
      .then(function (resp) { return resp.json(); })
      .then(charities => {
        dispatch(loadCharitiesSuccess(charities));
      })
      .catch(err => {
        throw (err);
      })
  }
}