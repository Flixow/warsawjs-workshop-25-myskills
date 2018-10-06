import ACTIONS from 'actions';

const INITIAL_STATE = {
  system: [],
  social: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.PUSH_NOTIFICATION:
      return {
        ...state,
        system: [
          action.notification,
          ...state.system,
        ],
      };
    case ACTIONS.REMOVE_NOTIFICATION:
      return {
        ...state,
        system: state.system.filter(notification => notification.id !== action.id),
      };
    default:
      return state;
  }
};
