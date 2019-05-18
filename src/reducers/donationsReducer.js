import * as types from '../actions/actionTypes';

function donationsReducers(state = 0, action) {
  switch (action.type) {
    case types.LOAD_ALL_DONATE_SUCCESS:
      const totalDonate = [...action.donations].reduce((sum, donate) => {
        return sum + donate.amount;
      }, 0);
      return totalDonate;
    
    case types.DONATE_SUCCESS:
      return state + action.amount;
  
    default:
      return state;
  }
}
  
export default donationsReducers;