import { Field } from 'redux-form';

import { Input } from 'components';

const AnswerField = ({ type, options }) => {
  switch (type) {
    case 'open':
      return (
        <Field
          full
          standard
          name="answer"
          type="text"
          component={Input}
          labelText="Answer"
        />
      );

    case 'single':
      return (
        <Field
          full
          standard
          name="answer"
          type="radio-list"
          component={Input}
          items={options.map(option => ({
            value: option,
          }))}
          labelText="Answer"
        />
      );

    case 'multi':
      return (
        <Field
          full
          standard
          name="answer"
          type="select"
          component={Input}
          options={options.map(option => ({
            value: option,
            label: option,
          }))}
          labelText="Answer"
        />
      );

    default:
      return 'No field';
  }
};

export default AnswerField;
