import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';

import { Loading } from 'components';

import initStore from 'utils/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Fragment>
            <Loading />
            <Component {...pageProps} />

            <div id="system-notifications-root" />
          </Fragment>

        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
