import axios from 'axios';
import { constants } from '@/constants';

const { SERVER } = constants;

const api = axios.create({
  baseURL: SERVER.URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@ChatApp:token');

  if (!!token) {
    config.headers!['x-access-token'] = token.replaceAll('"', '');
  }

  return config;
});

export { api };