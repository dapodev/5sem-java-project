import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { ApiRoutes } from 'api/routes';
import { QUERY_KEYS } from 'config/constants';

import { IUseCheckAccessResponse } from './types';

const useCheckAccess = (): UseQueryResult<
  IUseCheckAccessResponse,
  AxiosError
> =>
  useQuery(
    [QUERY_KEYS.CHECK_ACCESS_TOKEN],
    async () => {
      const apiClient = apiClientWrapper();

      const { data: userResponse } = await apiClient.get(
        ApiRoutes.CHECK_ACCESS,
      );

      return userResponse;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

export default useCheckAccess;
