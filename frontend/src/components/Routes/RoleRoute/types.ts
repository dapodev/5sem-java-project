import { UserRoles } from 'types/userRoles';

export interface IRoleRouteContainerProps {
  acceptedRoles: UserRoles[];
}

export interface IRoleRouteProps extends IRoleRouteContainerProps {
  userRole: UserRoles;
}
