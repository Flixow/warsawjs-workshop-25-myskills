import { ListGroupItem, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { Button } from 'components';
import AnswerField from './AnswerField';

import { answerQuestion } from 'actions/questions';

let QuestionsListItem = ({
  question,
  handleNextQuestion, answerQuestion,
  handleSubmit, reset,
}) => {
  const handleSubmitAnswer = values => {
    answerQuestion({
      answer: values.answer,
      questionId: question.id,
    }).then(() => {
      reset();
      handleNextQuestion();
    });
  };

  return (
    <ListGroupItem>
      <h3>{question.question}</h3>
      <Well bsSize="small">Category: {question.category}</Well>
      <Well bsSize="small">Level: {question.level}</Well>

      <form onSubmit={handleSubmit(handleSubmitAnswer)}>
        <AnswerField {...question} />

        <Button primary blue>
          Next question
        </Button>
      </form>

    </ListGroupItem>
  );
};

const FORM_NAME = 'QuestionForm';

QuestionsListItem = reduxForm({
  form: FORM_NAME,
})(QuestionsListItem);

QuestionsListItem = connect(null, {
  answerQuestion,
})(QuestionsListItem);

export default QuestionsListItem;
