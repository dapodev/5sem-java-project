import axios, { AxiosInstance } from 'axios';
import { QueryClient } from 'react-query';

import { env } from 'config/env';

import { API_BASE } from './routes';

export const queryClient = new QueryClient();

export const apiClientWrapper = (): AxiosInstance => {
  const apiClient = axios.create({
    baseURL: `${env.REACT_APP_API_URL}${API_BASE}`,
    withCredentials: true,
  });

  return apiClient;
};
