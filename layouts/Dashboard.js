import { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';

import { SystemNotifications } from 'components';

class Dashboard extends PureComponent {
  componentWillMount() {
    const { user } = this.props;

    if (!user.id) {
      this.props.router.push('/signin');
    }
  }

  render() {
    const { user } = this.props;

    return (
      <Fragment>
        <header>Hello {user.email}</header>
        <main>{this.props.children}</main>
        <SystemNotifications />
      </Fragment>
    );
  }
}

export default withRouter(Dashboard);
