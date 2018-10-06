import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import clock from './clock';

import user from './user';

export default combineReducers({
  clock,
  user,

  form: formReducer,
});
