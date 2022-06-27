import axios from 'axios';
import { constants } from '@/constants';

const { SERVER } = constants;

const api = axios.create({
  baseURL: SERVER.URL,
});

const token = localStorage.getItem('@ChatApp:token') as string;

api.defaults.headers.common['x-access-token'] = token;

export { api };