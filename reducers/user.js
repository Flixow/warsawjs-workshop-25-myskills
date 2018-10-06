import ACTIONS from 'actions';

const INITIAL_STATE = {
  profile: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default: return state;
  }
};
