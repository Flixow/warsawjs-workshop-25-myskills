import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { Grid, Row, Col } from 'react-bootstrap';

import { SystemNotifications, QuestionsList, Button } from 'components';

import { fetchAll, setFilters } from 'actions/questions';
import { randomFilteredQuestionsSelector } from '../selectors';

class Dashboard extends PureComponent {
  componentWillMount() {
    const { user } = this.props;

    if (!user.id) {
      this.props.router.push('/signin');
    } else {
      this.props.fetchAll();
    }
  }

  setTechnologyFilter = value => {
    this.props.setFilters({
      technologyFilter: value,
    });
  }
  setLevelFilter = value => {
    this.props.setFilters({
      levelFilter: value,
    });
  }

  render() {
    const {
      user, questions, categories, levels, technologyFilter, levelFilter,
    } = this.props;

    return (
      <main>
        <Grid>
          <Row>
            <Col xs={12}>
              <header>Hello {user.email}</header>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={2}>
              <section>
                <h3>Select technology:</h3>
                <Button
                  full
                  secondary
                  blue={technologyFilter}
                  green={!technologyFilter}
                  onClick={() => this.setTechnologyFilter('')}
                >
                  All
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    full
                    secondary
                    blue={technologyFilter !== category}
                    green={technologyFilter === category}
                    onClick={() => this.setTechnologyFilter(category)}
                  >
                    {category}
                  </Button>
                ))}
                <h3>Select level:</h3>
                <Button
                  full
                  flat
                  blue={levelFilter}
                  red={!levelFilter}
                  onClick={() => this.setLevelFilter('')}
                >
                  All
                </Button>
                {levels.map(level => (
                  <Button
                    key={level}
                    full
                    flat
                    blue={!levelFilter !== level}
                    red={levelFilter === level}
                    onClick={() => this.setLevelFilter(level)}
                  >
                    {level}
                  </Button>
                ))}
                {this.props.children}
              </section>
            </Col>
            <Col xs={6} md={10}>
              <section>
                <QuestionsList questions={questions} />
              </section>
            </Col>
          </Row>
        </Grid>

        <aside>
          <SystemNotifications />
        </aside>
      </main>
    );
  }
}

Dashboard =  connect(state => ({
  questions: randomFilteredQuestionsSelector(state),
  categories: state.questions.list
    .map(question => question.category)
    .filter((value, idx, arr) => arr.indexOf(value) === idx),
  levels: state.questions.list
    .map(question => question.level)
    .filter((value, idx, arr) => arr.indexOf(value) === idx),
  technologyFilter: state.questions.technologyFilter,
  levelFilter: state.questions.levelFilter,
}), {
  fetchAll,
  setFilters,
})(Dashboard);

Dashboard = withRouter(Dashboard);

export default Dashboard;
