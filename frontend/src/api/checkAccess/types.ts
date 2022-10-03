import { UserRoles } from 'types/userRoles';

export interface IUseCheckAccessResponse {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
}
