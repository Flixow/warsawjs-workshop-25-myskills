import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import clock from './clock';

import user from './user';
import pending from './pending';

export default combineReducers({
  clock,
  user,
  pending,

  form: formReducer,
});
