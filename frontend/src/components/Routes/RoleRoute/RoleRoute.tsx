import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { APP_ROUTE } from 'constants/appRoutes';

import { IRoleRouteProps } from './types';

const RoleRoute: FC<IRoleRouteProps> = ({ acceptedRoles, userRole }) => {
  const isAllowed = acceptedRoles.includes(userRole);

  return isAllowed ? <Outlet /> : <Navigate replace to={APP_ROUTE.notFound} />;
};

export default RoleRoute;
