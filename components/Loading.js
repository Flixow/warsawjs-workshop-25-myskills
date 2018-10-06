import { connect } from 'react-redux';

import { LoaderIndicator } from './';

const Loading = ({ pending }) => !!pending.length && <LoaderIndicator />;

export default connect(({ pending }) => ({ pending }), {})(Loading);
