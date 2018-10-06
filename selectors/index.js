import { createSelector } from 'reselect';

const questionsSelector = state => state.questions.list;
const technologyFilterSelector = state => state.questions.technologyFilter;
const levelFilterSelector = state => state.questions.levelFilter;

const getFilteredQuestions = (questions, technologyFilter, levelFilter) => {
  const filteredQuestions = questions.filter(question => {
    if (technologyFilter && question.category !== technologyFilter) {
      return false;
    }

    if (levelFilter && question.level !== levelFilter) {
      return false;
    }

    return true;
  });
  const filteredRandomQuestions = filteredQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);

  return filteredRandomQuestions;
};

export const randomFilteredQuestionsSelector = createSelector(
  questionsSelector,
  technologyFilterSelector,
  levelFilterSelector,
  getFilteredQuestions
);

export const randomQuestionsSelector = createSelector(
  questionsSelector,
  questions => questions.sort(() => 0.5 - Math.random()).slice(0, 5)
);
