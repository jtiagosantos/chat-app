import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required('Required field'),
  password: yup
    .string()
    .required('Required field')
});