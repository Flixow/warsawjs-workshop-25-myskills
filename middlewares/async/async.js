// import { SubmissionError } from 'redux-form';
import { getError, isFunction } from './async.utils.js';
import { setPending, deletePending } from './reducer.pending.js';

const createAsyncMiddleware = (options = {}) => {
  const { actions = {} } = options;
  const hasPushAutoRemoveNotifications = isFunction(actions.pushAutoRemoveNotifications);
  const hasLogoutUser = isFunction(actions.logoutUser);

  return ({ dispatch, getState }) => next => async(action = {}) => {
    const hasOnCatch = isFunction(action.onCatch);
    const hasOnFinally = isFunction(action.onFinally);
    const pushAutoRemoveNotifications = notifications => {
      if (hasPushAutoRemoveNotifications) {
        dispatch(actions.pushAutoRemoveNotifications(notifications));
      }
    };

    if (action.async) {
      dispatch(setPending(action.name));

      try {
        const response = await action.async(dispatch, getState, options.extraArguments);
        pushAutoRemoveNotifications({
          success: `Action '${action.name}' finished successfully!`,
        });

        return response;
      } catch (err) {
        const errors = getError(err);

        switch (errors.code) {
          case 400:
            // throw new SubmissionError(errors.message);

            break;
          case 401:
            if (hasLogoutUser) {
              dispatch(actions.logoutUser());
            }

            break;
          default:
            break;
        }

        if (hasOnCatch) {
          action.onCatch(errors);
        }

        return Promise.reject(errors);
      } finally {
        dispatch(deletePending(action.name));
        if (hasOnFinally) {
          action.onFinally(dispatch);
        }
      }
    } else {
      const actionCaller = action.sync || action;

      return typeof actionCaller === 'function'
        ? actionCaller(dispatch, getState, options.extraArguments)
        : next(action);
    }
  };
};

const async = createAsyncMiddleware();
async.withOptions = createAsyncMiddleware;

export default async;
