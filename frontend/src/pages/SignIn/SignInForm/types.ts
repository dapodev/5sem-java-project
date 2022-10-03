import { FormikHandlers, FormikState } from 'formik';

export enum SignInFormField {
  EMAIL = 'email',
  PASSWORD = 'password',
  REMEMBER = 'isRemember',
}

export interface ISignInFormValues {
  [SignInFormField.EMAIL]: string;
  [SignInFormField.PASSWORD]: string;
  [SignInFormField.REMEMBER]: boolean;
}

export type TSignInFormikConfig = FormikHandlers &
  FormikState<ISignInFormValues>;

export interface ISignInFormProps {
  formik: TSignInFormikConfig;
  errorMessage?: string;
}
