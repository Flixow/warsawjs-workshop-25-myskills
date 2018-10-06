import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import cssVariables from 'utils/cssVariables';

const SystemNotificationsContainer = ({ notifications }) => {
  const icons = {
    success: 'check',
    'error': 'times',
    info: 'info-circle',
  };

  return (
    <div className="System-notifications">
      <ul className="System-notifications__List">
        {notifications.map(notification => (
          <li
            key={notification.id}
            className={classnames(
              'System-notifications__List__Item',
              { [`System-notifications__List__Item--${notification.type}`]: notification.type }
            )}
          >
            <i className={`icon-${icons[notification.type]} u-mr--`} />
            {notification.message}
          </li>
        ))}
      </ul>

      <style jsx>{`
          .System-notifications {
            position: fixed;
            bottom: 50px;
            left: 15px;
            max-height: 90vh;
            overflow-y: auto;
            z-index: 1000;
          }

          .System-notifications__List {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .System-notifications__List__Item {
            position: relative;
            min-width: 312px;
            font-size: 14px;
            padding: 13px 24px;
            border-radius: 4px;
            color: #fff;
            font-weight: 700;
          }
          .System-notifications__List__Item + .System-notifications__List__Item {
            margin-top: 10px;
          }
          .System-notifications__List__Item--success {
            background-color: ${cssVariables.colors.secondary.green};
          }
          .System-notifications__List__Item--error {
            background-color: ${cssVariables.colors.secondary.red};
          }
          .System-notifications__List__Item--info {
            background-color: ${cssVariables.colors.secondary.blue};
          }
        `}</style>
    </div>
  );
};

const SystemNotifications = ({ notifications }) => {
  const modalRoot = typeof document !== 'undefined' && document.getElementById('system-notifications-root');

  return modalRoot && !!notifications.length && (
    ReactDOM.createPortal(
      <SystemNotificationsContainer notifications={notifications} />,
      modalRoot,
    )
  );
};

SystemNotifications.Container = SystemNotificationsContainer;

export default connect(({ notifications }) => ({
  notifications: notifications.system,
}), null)(SystemNotifications);
