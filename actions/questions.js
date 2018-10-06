import API from 'utils/api';
import ACTIONS from 'actions';

export const setQuestions = payload => ({
  type: ACTIONS.SET_QUESTIONS,
  payload,
});

export const fetchAll = () => ({
  name: 'questions.fetchAll',
  async: async dispatch => {
    const questions = await API.questions.fetchAll();

    dispatch(setQuestions(questions));
  },
});
