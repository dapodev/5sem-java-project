import { FC } from 'react';
import { useParams } from 'react-router';

import { useCheckIsResetExpired } from 'api/auth';

import ResetPassword from './ResetPassword';
import { TResetPasswordParams } from './types';

const ResetPasswordContainer: FC = (props) => {
  const params = useParams() as TResetPasswordParams;

  const {
    error: checkResetExpiredError,
    isError: isCheckResetExpiredError,
    isLoading: isCheckResetExpiredLoading,
  } = useCheckIsResetExpired(params);

  return (
    <ResetPassword
      checkResetExpiredErrorMessage={
        checkResetExpiredError?.response?.data.message ||
        checkResetExpiredError?.message
      }
      isCheckResetExpiredLoading={isCheckResetExpiredLoading}
      isCheckResetExpiredError={isCheckResetExpiredError}
      {...props}
    />
  );
};

export default ResetPasswordContainer;
