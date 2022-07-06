import yup from '@/config/yup';

export const enterRoomSchema = yup.object().shape({
  roomCode: yup
  .string()
  .required(),
});