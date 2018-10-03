import Link from 'next/link';
import { connect } from 'react-redux';

import Clock from './Clock';
import AddCount from './AddCount';

const Page = ({ title, linkTo, lastUpdate, light }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <AddCount />
      <nav>
        <Link href={linkTo}><a>Navigate</a></Link>
      </nav>
    </div>
  );
};

export default connect(({ clock }) => clock)(Page);
