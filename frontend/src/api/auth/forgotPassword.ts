import { useMutation, UseMutationResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { ApiRoutes } from 'api/routes';
import { IForgotPasswordValues } from 'pages/ForgotPassword/types';

import { IForgotPasswordProps, IRequestErrorPayload } from './types';

const useForgotPassword = (
  options: IForgotPasswordProps,
): UseMutationResult<
  void,
  AxiosError<IRequestErrorPayload>,
  IForgotPasswordValues
> => {
  return useMutation(async (data: IForgotPasswordValues) => {
    const apiClient = apiClientWrapper();
    const response = await apiClient.post(ApiRoutes.FORGOT_PASSWORD, data);
    return response.data;
  }, options);
};

export default useForgotPassword;
