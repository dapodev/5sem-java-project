import { AxiosError } from 'axios';
import { FC, useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { useForgotPassword, IRequestErrorPayload } from 'api/auth';

import ForgotPassword from './ForgotPassword';
import {
  INITIAL_FORGOT_PASSWORD_VALUES,
  INITIAL_TIMER_VALUE,
  RESEND_LINK_TIMER_DURATION_MS,
  SERVER_ERROR_STRING,
} from './constants';
import { IForgotPasswordValues } from './types';
import { forgotPasswordValidationSchema } from './validation';

const ForgotPasswordContainer: FC = () => {
  const handleSubmit = (forgotPasswordPayload: IForgotPasswordValues) =>
    sendLinkMutate(forgotPasswordPayload);

  const formik = useFormik({
    initialValues: INITIAL_FORGOT_PASSWORD_VALUES,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: handleSubmit,
  });

  const [timer, setTimer] = useState<number | ReturnType<typeof setTimeout>>(
    INITIAL_TIMER_VALUE,
  );
  const [isFormVisible, setFormVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const onBackLinkClick = () => {
    setFormVisible(true);
  };

  const onResendButtonClick = () => {
    handleSubmit(formik.values);
  };

  const setResendTimer = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        setTimer(INITIAL_TIMER_VALUE);
      }, RESEND_LINK_TIMER_DURATION_MS),
    );
  };

  const showResendView = () => {
    setFormVisible(false);
    setResendTimer();
    setErrorMessage(null);
  };

  const handleError = (error: AxiosError<IRequestErrorPayload>) => {
    const errorResetLinkMessage =
      error?.response?.data?.message || error?.message;
    if (errorResetLinkMessage.includes(SERVER_ERROR_STRING)) {
      setFormVisible(false);
      if (errorMessage) {
        setResendTimer();
      }
    }
    setErrorMessage(errorResetLinkMessage);
  };

  const { mutate: sendLinkMutate, isLoading: isSendLinkLoading } =
    useForgotPassword({
      onSuccess: showResendView,
      onError: handleError,
    });

  useEffect(() => {
    return () => clearTimeout(timer);
  }, [timer]);

  return (
    <ForgotPassword
      formik={formik}
      timer={timer}
      errorMessage={errorMessage}
      isFormVisible={isFormVisible}
      isSendLinkLoading={isSendLinkLoading}
      onBackLinkClick={onBackLinkClick}
      onResendButtonClick={onResendButtonClick}
    />
  );
};

export default ForgotPasswordContainer;
