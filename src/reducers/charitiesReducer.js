import * as types from '../actions/actionTypes';

function charityReducer(state=[], action) {
  switch(action.type) {
    case types.LOAD_CHARITIES_SUCCESS:
      return Object.assign([], [...action.charities]);

    default: 
      return state;
  }
}

export default charityReducer;