import { FormikHandlers, FormikState } from 'formik';

import { TFormikValues } from 'types/formik';

export enum ForgotPasswordField {
  email = 'email',
}

export interface IForgotPasswordValues {
  [ForgotPasswordField.email]: string;
}

export interface IForgotPasswordProps {
  formik: TFormikValues<IForgotPasswordValues>;
  isSendResetLinkError?: boolean;
  errorResetLinkMessage?: string;
}

export type TForgotPasswordFormikConfig = FormikHandlers &
  FormikState<IForgotPasswordValues>;

export interface IForgotPasswordProps {
  timer: number | NodeJS.Timeout;
  formik: TForgotPasswordFormikConfig;
  errorMessage: string | null;
  isFormVisible: boolean;
  isSendLinkLoading: boolean;
  onBackLinkClick: () => void;
  onResendButtonClick: () => void;
}
