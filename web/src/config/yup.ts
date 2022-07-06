import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: 'Required field',
  },
  string: {
    email: 'Insert a valid e-mail',
  },
});

export default yup;
