import yup from '@/config/yup';

export const createRoomSchema = yup.object().shape({
  roomName: yup
  .string()
  .required(),
});