import axios from 'axios';
import { ErrorResponseData } from './types';

export const errorHandler = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const errorMessage = (error?.response?.data as ErrorResponseData).error;

    throw errorMessage;
  }
}