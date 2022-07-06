import axios from 'axios';

//constants
import { SERVER_URL, TOKEN_STORAGE_KEY } from '@/constants';

const api = axios.create({
  baseURL: SERVER_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);

  if (!!token) {
    config.headers!['x-access-token'] = token.replaceAll('"', '');
  }

  return config;
});

export { api };