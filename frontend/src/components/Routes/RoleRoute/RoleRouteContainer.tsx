import { FC } from 'react';

import { USER } from 'constants/mocks';

import RoleRoute from './RoleRoute';
import { IRoleRouteContainerProps } from './types';

const RoleRouteContainer: FC<IRoleRouteContainerProps> = (props) => {
  const userRole = USER.role;

  return <RoleRoute userRole={userRole} {...props} />;
};

export default RoleRouteContainer;
