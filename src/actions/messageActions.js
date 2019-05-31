import * as types from '../actions/actionTypes';

export const updateMessage = (message) => ({
  type: types.UPDATE_MESSAGE,
  message,
});

export const removeMessage = () => ({
  type: types.REMOVE_MESSAGE,
});
