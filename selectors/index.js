import { createSelector } from 'reselect';

const questionsSelector = state => state.questions.list;

export const randomQuestionsSelector = createSelector(
  questionsSelector,
  questions => questions.sort(() => 0.5 - Math.random()).slice(0, 5)
);
