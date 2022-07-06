import * as yup from 'yup';

export const chatSchema = yup.object().shape({
  messageText: yup
    .string()
    .required('Message text is required'),
});
