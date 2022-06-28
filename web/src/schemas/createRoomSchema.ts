import * as yup from 'yup';

export const createRoomSchema = yup.object().shape({
  roomName: yup
  .string()
  .required('Required field')
});