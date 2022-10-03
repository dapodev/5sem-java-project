import { IMenuItemProps } from 'types/menu';

export interface ISideMenuProps {
  menuItems?: IMenuItemProps[];
  onClickLogOut?: () => void;
}
