import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

import * as messageActions from './messageActions';

export function getAllDonateSuccess(donations) {
  return {
    type: types.LOAD_ALL_DONATE_SUCCESS,
    donations,
  }
}

export function updateTotalDonate(amount) {
  return {
    type: types.UPDATE_TOTAL_DONATE,
    amount,
  }
}

export function donateSuccess(amount) {
  return {
    type: types.DONATE_SUCCESS,
    amount,
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

export function payDonate(id, amount, currency) {
  return function (dispatch) {
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
        dispatch(messageActions.updateMessage(err));
        console.log(err);
      });
  }
}