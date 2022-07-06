import yup from '@/config/yup';

export const chatSchema = yup.object().shape({
  messageText: yup
    .string()
    .required('Message text is required'),
});
