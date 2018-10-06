import { createStore, applyMiddleware, compose } from 'redux';
import async from '../middlewares/async';

import { pushAutoRemoveNotifications } from 'actions/notifications';

import rootReducer from '../reducers';

const enhancers = compose(
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f
);

const createStoreWithMiddleware = applyMiddleware(async.withOptions({
  actions: {
    // logoutUser: logout,
    pushAutoRemoveNotifications,
  },
  extraArguments: {
    test: 'this is extraArguments passed to to the async middleware',
  },
}))(createStore);

export default initialState =>
  createStoreWithMiddleware(rootReducer, initialState, enhancers);
