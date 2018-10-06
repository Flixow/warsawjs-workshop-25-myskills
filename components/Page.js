import Link from 'next/link';
import { connect } from 'react-redux';

import Clock from './Clock';
import AddCount from './AddCount';

import { register, login } from 'actions/auth';

const Page = ({ title, linkTo, lastUpdate, light, register, login }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <AddCount />
      <button onClick={() => register({ email: 'test', password: 'test' })}>Register</button>
      <button onClick={() => login({ email: 'test', password: 'test' })}>Login</button>
      <nav>
        <Link href={linkTo}><a>Navigate</a></Link>
      </nav>
    </div>
  );
};

export default connect(({ clock }) => clock, {
  register,
  login,
})(Page);
