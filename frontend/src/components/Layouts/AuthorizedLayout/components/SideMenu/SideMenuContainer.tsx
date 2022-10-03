import { FC } from 'react';

import { MENU_ROLES } from 'constants/menu';
import { UserRoles } from 'types/userRoles';

import { useLogOut } from 'api/logOut';

import SideMenu from './SideMenu';

export const SideMenuContainer: FC = () => {
  const menuRole = UserRoles.ADMIN;
  const menuItems = menuRole ? MENU_ROLES[menuRole] : [];

  const { mutate: logOutMutate } = useLogOut();

  return <SideMenu menuItems={menuItems} onClickLogOut={logOutMutate} />;
};

export default SideMenuContainer;
