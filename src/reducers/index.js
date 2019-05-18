import { combineReducers } from 'redux';
import charities from './charitiesReducer';
import donate from './donationsReducer';

const rootReducer = combineReducers({
  charities,
  donate,
});

export default rootReducer;