import { Component } from 'react';

import { getUserByToken } from 'actions/user';

import cookieStorage from 'utils/cookieStorage';

export default () => ComposedComponent => class withAuth extends Component {
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
    return <ComposedComponent {...this.props} />;
  }
};
