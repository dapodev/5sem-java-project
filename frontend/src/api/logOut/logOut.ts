import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper, queryClient } from 'api/base';
import { ApiRoutes } from 'api/routes';
import { QUERY_KEYS } from 'config/constants';

import { IUseLogOutResponse } from './types';

const useLogOut = (): UseMutationResult<
  IUseLogOutResponse,
  AxiosError,
  void
> => {
  const handleLogOut = () =>
    queryClient.invalidateQueries([QUERY_KEYS.CHECK_ACCESS_TOKEN]);

  return useMutation(
    async () => {
      const apiClient = apiClientWrapper();

      const { data: tokenResponse } = await apiClient.post(ApiRoutes.LOG_OUT);

      return tokenResponse;
    },
    {
      onSuccess: handleLogOut,
    },
  );
};

export default useLogOut;
