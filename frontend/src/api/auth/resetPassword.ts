import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import { useNavigate } from 'react-router';

import { apiClientWrapper } from 'api/base';
import { ApiRoutes } from 'api/routes';
import { APP_ROUTE } from 'constants/appRoutes';

import { IResetPasswordParamsPayload, IRequestErrorPayload } from './types';

const useResetPassword = (
  params: IResetPasswordParamsPayload,
): UseMutationResult<void, AxiosError<IRequestErrorPayload>, string> => {
  const navigateTo = useNavigate();

  const { resetJWT } = params;

  const handleResetSuccess = () =>
    navigateTo(APP_ROUTE.signIn, {
      replace: true,
      state: { isPasswordUpdated: true },
    });

  return useMutation(
    async (newPassword: string) => {
      const apiClient = apiClientWrapper();

      const { data: dataResponse } = await apiClient.post(
        `${ApiRoutes.RESET_PASSWORD}/${resetJWT}`,
        { password: newPassword },
      );

      return dataResponse;
    },
    { onSuccess: handleResetSuccess },
  );
};

export default useResetPassword;
