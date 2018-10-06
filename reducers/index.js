import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import clock from './clock';

import user from './user';
import notifications from './notifications';
import questions from './questions';

import pending from '../middlewares/async/reducer.pending';

export default combineReducers({
  clock,
  user,
  pending,
  notifications,
  questions,

  form: formReducer,
});
