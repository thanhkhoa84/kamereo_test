import * as types from '../actions/actionTypes';

function charityReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_CHARITIES_SUCCESS:
      return Object.assign([], [...action.charities]);

    case types.FETCH_CHARITIES_FAILURE:
      return state;

    default:
      return state;
  }
}

export default charityReducer;