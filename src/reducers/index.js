import { combineReducers } from 'redux';
import charities from './charitiesReducer';

const rootReducer = combineReducers({
  charities
});

export default rootReducer;