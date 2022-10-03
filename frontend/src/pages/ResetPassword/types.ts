import { TFormikValues } from 'types/formik';

export enum ResetPasswordField {
  password = 'password',
  confirmPassword = 'confirmPassword',
}

export type TResetPasswordParams = {
  resetJWT: string;
};

export interface IResetPasswordValues {
  [ResetPasswordField.password]: string;
  [ResetPasswordField.confirmPassword]: string;
}

export interface IResetPasswordProps {
  isCheckResetExpiredLoading: boolean;
  isCheckResetExpiredError: boolean;
  checkResetExpiredErrorMessage?: string;
}

export type TResetPasswordFormContainerProps = Pick<
  IResetPasswordProps,
  'checkResetExpiredErrorMessage' | 'isCheckResetExpiredError'
>;

export interface IResetPasswordFormProps
  extends TResetPasswordFormContainerProps {
  formik: TFormikValues<IResetPasswordValues>;
  isResetPasswordLoading: boolean;
  isResetPasswordError: boolean;
  resetPasswordErrorMessage?: string;
}
