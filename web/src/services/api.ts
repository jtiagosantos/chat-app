import axios from 'axios';
import { constants } from '@/constants';

const { SERVER } = constants;

export const api = axios.create({
  baseURL: SERVER.URL,
});
