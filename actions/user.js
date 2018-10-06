import API from 'utils/api';
import ACTIONS from 'actions';
import cookieStorage from 'utils/cookieStorage';

export const setUser = payload => ({
  type: ACTIONS.SET_USER_PROFILE,
  payload,
});

export const fetchProfile = () => async dispatch => {
  const token = cookieStorage.get('token');

  const [user] = await API.user.fetchProfile({ token });
  dispatch(setUser(user));
};

export const getUserByToken = ({ token }) => async() => {
  const [user] = await API.auth.loginByToken({ token });

  return user;
};


