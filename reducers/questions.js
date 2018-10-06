import ACTIONS from 'actions';

const INITIAL_STATE = {
  list: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SET_QUESTIONS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
