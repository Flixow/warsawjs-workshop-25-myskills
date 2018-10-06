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

export const answerQuestion = ({ questionId, answer }) => ({
  name: 'questions.answerQuestion',
  async: async(dispatch, getState) => {
    const { user } = getState();

    await API.questions.answer({ userId: user.profile.id, questionId, answer });
  },
});
