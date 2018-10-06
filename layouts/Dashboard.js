import { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { SystemNotifications } from 'components';

import { fetchAll } from 'actions/questions';

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
        <header>Hello {user.email}</header>
        <section>{this.props.children}</section>
        <section>
          <ul>
            {questions.map(question => (
              <div key={question.id}>
                <h3>{question.question}</h3>
              </div>
            ))}
          </ul>
        </section>

        <aside>
          <SystemNotifications />
        </aside>
      </main>
    );
  }
}

Dashboard =  connect(({ questions }) => ({
  questions: questions.list,
}), {
  fetchAll,
})(Dashboard);

Dashboard = withRouter(Dashboard);

export default Dashboard;
