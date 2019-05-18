import * as types from '../actions/actionTypes';

export function updateMessage(message) {
  return {
    type: types.UPDATE_MESSAGE,
    message,
  }
}

export function removeMessage() {
  return {
    type: types.REMOVE_MESSAGE,
  }
}
