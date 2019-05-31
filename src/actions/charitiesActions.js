import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

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
      throw (err);
    })
}