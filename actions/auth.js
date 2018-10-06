import API from 'utils/api';
import cookieStorage from 'utils/cookieStorage';

import { pushAutoRemoveNotifications } from './notifications';
import { setPending, deletePending } from '../reducers/pending';

export const signup = ({ email, password }) => async dispatch => {
  try {
    dispatch(setPending('auth.signup'));
    const user = await API.auth.register({ email, password });
    cookieStorage.set('token', user.token);
    dispatch(pushAutoRemoveNotifications({
      success: 'You have been registered!',
    }));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(deletePending('auth.signup'));
  }
};

export const signin = ({ email, password }) => async dispatch => {
  try {
    dispatch(setPending('auth.signin'));
    const [user] = await API.auth.login({ email, password });
    if (user) {
      cookieStorage.set('token', user.token);
      dispatch(pushAutoRemoveNotifications({
        success: 'You have been logged in!',
      }));
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(deletePending('auth.signin'));
  }
};
