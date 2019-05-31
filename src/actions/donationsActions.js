import * as types from './actionTypes';
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

import * as messageActions from './messageActions';

export const fetchAllDonateSuccess = (donations) => ({
  type: types.FETCH_TOTAL_DONATE_SUCCESS,
  donations,
});

export const fetchAllDonateFailure = () => ({
  type: types.FETCH_TOTAL_DONATE_FAILURE,
});

export const donateSuccess = (amount) => ({
  type: types.DONATE_SUCCESS,
  amount,
});

export const donateFailure = (amount) => ({
  type: types.DONATE_FAILURE,
  amount,
});

export const getAllDonations = (dispatch) => (dispatch) => {
  return fetch('http://localhost:3001/payments')
    .then(function (resp) { return resp.json(); })
    .then(donations => {
      dispatch(fetchAllDonateSuccess(donations));
    })
    .catch(err => {
      dispatch(fetchAllDonateFailure());
      dispatch(messageActions.updateMessage(err));
      throw (err);
    })
}


export const payDonate = (id, amount, currency) => (dispatch) => {
  return fetch('http://localhost:3001/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      dispatch(donateSuccess(data.amount));
      dispatch(messageActions.updateMessage(`Thank you for donated ${data.amount}`));
      setTimeout(() => {
        dispatch(messageActions.removeMessage());
      }, 3000);
    })
    .catch(err => {
      dispatch(donateFailure());
      dispatch(messageActions.updateMessage(err));
      console.log(err);
    });
};