import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { Grid, Row, Col } from 'react-bootstrap';

import { SystemNotifications, QuestionsList } from 'components';

import { fetchAll } from 'actions/questions';
import { randomQuestionsSelector } from '../selectors';

class Dashboard extends PureComponent {
  componentWillMount() {
    const { user } = this.props;

    if (!user.id) {
      this.props.router.push('/signin');
    } else {
      this.props.fetchAll();
    }
  }

  render() {
    const { user, questions } = this.props;

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
                <h3>
                  We will render filter buttons here soon!
                </h3>
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
  questions: randomQuestionsSelector(state),
}), {
  fetchAll,
})(Dashboard);

Dashboard = withRouter(Dashboard);

export default Dashboard;
