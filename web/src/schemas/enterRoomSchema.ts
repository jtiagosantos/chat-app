import * as yup from 'yup';

export const enterRoomSchema = yup.object().shape({
  roomCode: yup
  .string()
  .required('Required field'),
});