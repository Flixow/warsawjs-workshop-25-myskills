import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required, email, length } from 'redux-form-validators';
import Router from 'next/router';

import { Input, Button } from 'components';

import { signup } from 'actions/auth';

let SignUp = ({ signup, handleSubmit }) => {
  const handleSignUp = values => {
    return signup(values)
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

SignUp = reduxForm({
  form: FORM_NAME,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(SignUp);

SignUp = connect(null, {
  signup,
})(SignUp);

export default SignUp;
