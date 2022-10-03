import { ReactElement } from 'react';

export interface IMenuItemProps {
  key: string;
  label: ReactElement;
  icon: ReactElement;
}

export interface IRolesMenu {
  [key: string]: IMenuItemProps[];
}
