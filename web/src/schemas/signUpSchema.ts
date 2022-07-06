import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Required field')
    .max(20, 'Maximum of 20 characters'),
  profileImage: yup
    .string()
    .trim()
    .required('Required field'),
  email: yup
    .string()
    .email('Insert a valid e-mail')
    .trim()
    .required('Required field'),
  password: yup
    .string()
    .trim()
    .required('Required field')
    .min(8, 'At least 8 characters')
});