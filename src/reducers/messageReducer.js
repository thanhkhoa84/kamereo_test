import * as types from '../actions/actionTypes'

function messageReducer(state = '', action) {
  switch (action.type) {
    case types.UPDATE_MESSAGE:
      return [...state, action.message];

    case types.REMOVE_MESSAGE:
      return [...state.splice(1)]

    default:
      return state;
  }
}



export default messageReducer;
