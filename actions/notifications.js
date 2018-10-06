import ACTIONS from 'actions';

export const pushNotification = notification => {
  if (!notification.id) {
    notification.id = new Date().getTime();
  }
  if (!notification.type) {
    notification.type = 'info';
  }

  return {
    type: ACTIONS.PUSH_NOTIFICATION,
    notification,
  };
};

export const pushAutoRemoveNotifications = ({ secondsToRemove = 3, ...rest }) => dispatch => {
  const id = new Date().getTime();

  Object.entries(rest).forEach(([key, value]) => {
    const notificationToPush = {
      id,
      type: key,
      message: value,
    };
    dispatch(pushNotification(notificationToPush));
    setTimeout(
      () => dispatch(removeNotification(id)),
      secondsToRemove * 1000
    );
  });
};

export const removeNotification = id => ({
  type: ACTIONS.REMOVE_NOTIFICATION,
  id,
});
