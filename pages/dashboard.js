import { PureComponent } from 'react';

import { Dashbaord } from '../layouts';

import { getUserByToken } from 'actions/user';

import cookieStorage from 'utils/cookieStorage';

class Dashboard extends PureComponent {
  static async getInitialProps({ req, isServer, store }) {
    let token;

    if (isServer) {
      const { cookies } = req;
      token = cookieStorage.getWithPrefix(cookies, 'token');
    } else {
      token = cookieStorage.get('token');
    }

    const user = await store.dispatch(getUserByToken({ token }));

    return { user };
  }

  static defaultProps = {
    user: {},
  }

  render() {
    return (
      <Dashbaord user={this.props.user} />
    );
  }
}

export default Dashboard;
