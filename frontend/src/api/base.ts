import axios, { AxiosInstance } from 'axios';

import { env } from 'config/env';

export const apiClientWrapper = (): AxiosInstance => {
  const apiClient = axios.create({ baseURL: env.REACT_APP_API_URL });

  return apiClient;
};
