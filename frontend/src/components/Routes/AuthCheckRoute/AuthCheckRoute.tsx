import { FC } from 'react';
import { Spin } from 'antd';

import { AuthorizedLayout, UnauthorizedLayout } from 'components/Layouts';

import { LoaderWrapper } from './styled';
import { IAuthCheckRouteProps } from './types';

const AuthCheckRoute: FC<IAuthCheckRouteProps> = ({
  isAuthorized,
  isCheckingAuthorization,
}) =>
  isCheckingAuthorization ? (
    <LoaderWrapper>
      <Spin size='large' />
    </LoaderWrapper>
  ) : isAuthorized ? (
    <AuthorizedLayout />
  ) : (
    <UnauthorizedLayout />
  );

export default AuthCheckRoute;
