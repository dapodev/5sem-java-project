import { FC } from 'react';
import { useParams } from 'react-router';
import { useFormik } from 'formik';

import { useResetPassword } from 'api/auth';
import { TFormikOnSubmitProps } from 'types/formik';

import ResetPasswordForm from './ResetPasswordForm';
import { INITIAL_RESET_PASSWORD_VALUES } from '../constants';
import { resetPasswordValidationSchema } from '../validation';
import {
  TResetPasswordFormContainerProps,
  IResetPasswordValues,
  TResetPasswordParams,
} from '../types';

const ResetPasswordFormContainer: FC<TResetPasswordFormContainerProps> = (
  props,
) => {
  const params = useParams() as TResetPasswordParams;

  const {
    mutate: resetPasswordMutate,
    error: resetPasswordError,
    isError: isResetPasswordError,
    isLoading: isResetPasswordLoading,
  } = useResetPassword(params);

  const hadleSubmitFormik: TFormikOnSubmitProps<IResetPasswordValues> = ({
    password,
  }) => resetPasswordMutate(password);

  const formik = useFormik({
    initialValues: INITIAL_RESET_PASSWORD_VALUES,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: resetPasswordValidationSchema,
    onSubmit: hadleSubmitFormik,
  });

  return (
    <ResetPasswordForm
      formik={formik}
      resetPasswordErrorMessage={
        resetPasswordError?.response?.data.message ||
        resetPasswordError?.message
      }
      isResetPasswordError={isResetPasswordError}
      isResetPasswordLoading={isResetPasswordLoading}
      {...props}
    />
  );
};

export default ResetPasswordFormContainer;
