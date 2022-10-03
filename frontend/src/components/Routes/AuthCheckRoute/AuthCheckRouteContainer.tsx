import { FC } from 'react';

import { useCheckAccess } from 'api/checkAccess';

import AuthCheckRoute from './AuthCheckRoute';

const AuthCheckRouteContainer: FC = () => {
  const { isLoading: isChecking, isSuccess: isAuthorized } = useCheckAccess(); // TODO: will be replaced with useGetProfile

  return (
    <AuthCheckRoute
      isAuthorized={isAuthorized}
      isCheckingAuthorization={isChecking}
    />
  );
};

export default AuthCheckRouteContainer;
