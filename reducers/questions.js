import ACTIONS from 'actions';

const INITIAL_STATE = {
  list: [],
  technologyFilter: '',
  levelFilter: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SET_QUESTIONS:
      return {
        ...state,
        list: action.payload,
      };

    case ACTIONS.SET_FILTERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
