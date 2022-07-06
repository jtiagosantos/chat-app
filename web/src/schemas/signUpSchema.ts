import yup from '@/config/yup';

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required()
    .max(20, 'Maximum of 20 characters'),
  profileImage: yup
    .string()
    .trim()
    .required(),
  email: yup
    .string()
    .email()
    .trim()
    .required(),
  password: yup
    .string()
    .trim()
    .required()
    .min(8, 'At least 8 characters')
});