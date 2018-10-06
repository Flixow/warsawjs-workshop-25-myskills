import { connect } from 'react-redux';

import Page from 'components/Page';

import { startClock, addCount, serverRenderClock } from 'actions/clock';

class Counter extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());

    return { isServer };
  }

  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Page title="Index Page" linkTo="/other" />
    );
  }
}

export default connect(null, {
  addCount,
  startClock,
})(Counter);
