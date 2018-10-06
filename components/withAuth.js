import { Component } from 'react';

import { getUserByToken, setUser } from 'actions/user';

import cookieStorage from 'utils/cookieStorage';

export default () => ComposedComponent => class withAuth extends Component {
  static async getInitialProps(ctx) {
    const composedInitialProps = ComposedComponent.getInitialProps
      ? await ComposedComponent.getInitialProps(ctx)
      : {};

    const { req, isServer, store } = ctx;
    let token;

    if (isServer) {
      const { cookies } = req;
      token = cookieStorage.getWithPrefix(cookies, 'token');
    } else {
      token = cookieStorage.get('token');
    }

    const user = await store.dispatch(getUserByToken({ token }));
    store.dispatch(setUser(user));

    return { ...composedInitialProps, user };
  }

  static defaultProps = {
    user: {},
  }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};
