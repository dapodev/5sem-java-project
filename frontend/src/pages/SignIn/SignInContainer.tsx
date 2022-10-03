import { FC } from 'react';
import { useLocation } from 'react-router';

import SignIn from './SignIn';
import { ISignInLocation } from './types';

const SignInContainer: FC = () => {
  const { state } = useLocation() as ISignInLocation;

  const isPasswordUpdated = state?.isPasswordUpdated;

  return <SignIn isPasswordUpdated={isPasswordUpdated} />;
};

export default SignInContainer;
