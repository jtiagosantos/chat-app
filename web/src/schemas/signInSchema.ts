import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Insert a valid e-mail')
    .required('Required field'),
  password: yup
    .string()
    .required('Required field')
});