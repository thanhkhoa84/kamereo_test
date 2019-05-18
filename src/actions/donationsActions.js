import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

export function getAllDonateSuccess(donations) {
  return {
    type: types.LOAD_ALL_DONATE_SUCCESS,
    donations,
  }
}

export function getAllDonations(dispatch) {
  return function (dispatch) {
    return fetch('http://localhost:3001/payments')
      .then(function (resp) { return resp.json(); })
      .then(donations => {
        dispatch(getAllDonateSuccess(donations));
      })
      .catch(err => {
        throw (err);
      })
  }
}