import MenuIcon from 'components/Layouts/AuthorizedLayout/components/SideMenu/MenuIcon';
import { Link } from 'react-router-dom';

import { IMenuItemProps, IRolesMenu } from 'types/menu';

import { APP_ROUTE } from './appRoutes';

export const MENU_WIDTH = 245;
export const AVATAR_SIZE = 32;

export const MENU_TITLE = {
  dashboard: 'Dashboard',
  requests: 'Requests',
  serialNumbers: 'Serial Numbers',
  certificates: 'Certificates',
  customers: 'Customers',
  employees: 'Employees',
  dealers: 'Dealers',
  dealerDetails: 'Dealer Details',
  analytics: 'Analytics',
  notFound: 'Not Found',
  signIn: 'Sign In',
  signUp: 'Sign Up',
  forgotPassword: 'Forgot Password',
  resetPassword: 'Reset Password',
};

const ADMIN_MENU: IMenuItemProps[] = [
  {
    key: MENU_TITLE.dashboard,
    label: <Link to={APP_ROUTE.dashboard}>{MENU_TITLE.dashboard}</Link>,
    icon: <MenuIcon />,
  },
  {
    key: MENU_TITLE.requests,
    label: <Link to={APP_ROUTE.requests}>{MENU_TITLE.requests}</Link>,
    icon: <MenuIcon />,
  },
  {
    key: MENU_TITLE.serialNumbers,
    label: <Link to={APP_ROUTE.serialNumbers}>{MENU_TITLE.serialNumbers}</Link>,
    icon: <MenuIcon />,
  },
  {
    key: MENU_TITLE.certificates,
    label: <Link to={APP_ROUTE.certificates}>{MENU_TITLE.certificates}</Link>,
    icon: <MenuIcon />,
  },
  {
    key: MENU_TITLE.customers,
    label: <Link to={APP_ROUTE.customers}>{MENU_TITLE.customers}</Link>,
    icon: <MenuIcon />,
  },
  {
    key: MENU_TITLE.employees,
    label: <Link to={APP_ROUTE.customers}>{MENU_TITLE.employees}</Link>,
    icon: <MenuIcon />,
  },
  {
    key: MENU_TITLE.dealers,
    label: <Link to={APP_ROUTE.dealers}>{MENU_TITLE.dealers}</Link>,
    icon: <MenuIcon />,
  },
  {
    key: MENU_TITLE.analytics,
    label: <Link to={APP_ROUTE.analytics}>{MENU_TITLE.analytics}</Link>,
    icon: <MenuIcon />,
  },
];

export const MENU_ROLES: IRolesMenu = {
  admin: ADMIN_MENU,
};
