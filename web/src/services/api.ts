import axios from 'axios';
import { constants } from '../constants';

const { SOCKET } = constants;

export const api = axios.create({
  baseURL: SOCKET.PORT,
});
