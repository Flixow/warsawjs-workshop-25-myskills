import { PureComponent } from 'react';

import { Dashbaord } from '../layouts';
import { withAuth } from 'components';

class Dashboard extends PureComponent {
  render() {
    return (
      <Dashbaord user={this.props.user} />
    );
  }
}

export default withAuth()(Dashboard);
