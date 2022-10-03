import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import { apiClientWrapper } from 'api/base';
import { ApiRoutes } from 'api/routes';
import { QUERY_KEYS } from 'config/constants';

import { IResetPasswordParamsPayload, IRequestErrorPayload } from './types';

const useCheckIsResetExpired = (
  params: IResetPasswordParamsPayload,
): UseQueryResult<void, AxiosError<IRequestErrorPayload>> => {
  const { resetJWT } = params;

  return useQuery(
    [QUERY_KEYS.CHECK_RESET_IS_EXPIRED],
    async () => {
      const apiClient = apiClientWrapper();

      const { data: userResponse } = await apiClient.get(
        `${ApiRoutes.RESET_PASSWORD}/${resetJWT}`,
      );

      return userResponse;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );
};

export default useCheckIsResetExpired;
