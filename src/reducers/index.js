import { combineReducers } from 'redux';
import charities from './charitiesReducer';
import donate from './donationsReducer';
import message from './messageReducer';

const rootReducer = combineReducers({
  charities,
  donate,
  message,
});

export default rootReducer;