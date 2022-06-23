import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Required field'),
  profileImageUrl: yup
    .string()
    .trim()
    .required('Required field'),
  email: yup
    .string()
    .trim()
    .required('Required field'),
  password: yup
    .string()
    .trim()
    .required('Required field')
    .min(8, 'At least 8 characters')
});