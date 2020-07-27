import {combineReducers} from 'redux';

import userReducer from './userReducer';
import questionReducer from './questionReducer';
import filterReducer from './filterReducer';
import documentReducer from './documentReducer';

const rootReducer = combineReducers({
  user: userReducer,
  question: questionReducer,
  filter: filterReducer,
  document: documentReducer
});

export default rootReducer;
