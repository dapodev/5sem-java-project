import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper, queryClient } from 'api/base';
import { ApiRoutes } from 'api/routes';
import { QUERY_KEYS } from 'config/constants';

import {
  IRequestErrorPayload,
  IUseAuthenticatePayload,
  IUseAuthenticateResponse,
} from './types';

const useAuthenticate = (): UseMutationResult<
  IUseAuthenticateResponse,
  AxiosError<IRequestErrorPayload>,
  IUseAuthenticatePayload
> => {
  const handleAuthenticated = () =>
    queryClient.invalidateQueries([QUERY_KEYS.CHECK_ACCESS_TOKEN]);

  return useMutation(
    async (signInPayload: IUseAuthenticatePayload) => {
      const apiClient = apiClientWrapper();

      const { data: tokenResponse } = await apiClient.post(
        ApiRoutes.SIGN_IN,
        signInPayload,
      );

      return tokenResponse;
    },
    {
      onSuccess: handleAuthenticated,
    },
  );
};

export default useAuthenticate;
