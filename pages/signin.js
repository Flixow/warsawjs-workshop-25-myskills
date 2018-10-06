import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required, email, length } from 'redux-form-validators';
import Router from 'next/router';

import { Input, Button } from 'components';

import { signin } from 'actions/auth';

let SignIn = ({ signin, handleSubmit }) => {
  const handleSignUp = values => {
    return signin(values)
      .then(() => Router.push('/dashboard'));
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <Field
        full
        standard
        name="email"
        type="text"
        component={Input}
        labelText="E-mail"
        validate={[required(), email()]}
      />
      <Field
        full
        standard
        name="password"
        type="password"
        component={Input}
        labelText="Password"
        validate={[required(), length({ min: 6 })]}
      />

      <Button primary blue>
        Submit
      </Button>
    </form>
  );
};

const FORM_NAME = 'SignUpForm';

SignIn = reduxForm({
  form: FORM_NAME,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(SignIn);

SignIn = connect(null, {
  signin,
})(SignIn);

export default SignIn;
