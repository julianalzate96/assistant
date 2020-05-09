import {combineReducers} from 'redux';

import userReducer from './userReducer';
import questionReducer from './questionReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  user: userReducer,
  question: questionReducer,
  filter: filterReducer,
});

export default rootReducer;
