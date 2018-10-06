import { PureComponent, Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';
import Link from 'next/link';

import { QuestionsListItem } from 'components';

class QuestionsList extends PureComponent {
  state = {
    currentQuestion: 0,
  }

  handleNextQuestion = () => {
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
  }

  render() {
    const { questions } = this.props;
    const { currentQuestion } = this.state;

    if (currentQuestion + 1 > questions.length) {
      return (
        <Link href="/profile">
          Go to profile
        </Link>
      );
    }

    return questions[currentQuestion] ? (
      <Fragment>
        <h4>Question {currentQuestion + 1} of {questions.length}</h4>
        <ListGroup>
          <QuestionsListItem
            question={questions[currentQuestion]}
            handleNextQuestion={this.handleNextQuestion}
          />
        </ListGroup>
      </Fragment>
    ) : null;
  }
}

export default QuestionsList;
