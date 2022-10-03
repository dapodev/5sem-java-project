import { AxiosError } from 'axios';

export interface IUseAuthenticatePayload {
  email: string;
  password: string;
  isRemember: boolean;
}

export interface IResetPasswordParamsPayload {
  resetJWT: string;
}

export interface IUseAuthenticateResponse {
  accessToken: string;
}

export interface IRequestErrorPayload {
  message: string;
  statusCode: number;
  success: boolean;
}
export interface IForgotPasswordProps {
  onSuccess: () => void;
  onError: (err: AxiosError<IRequestErrorPayload>) => void;
}
