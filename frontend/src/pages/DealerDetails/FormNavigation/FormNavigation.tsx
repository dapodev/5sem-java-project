import { FC } from 'react';

import { StyledMenu as Menu } from './styled';
import { NAVIGATION_MENU_ITEMS } from '../constants';

export const FormNavigation: FC = () => <Menu items={NAVIGATION_MENU_ITEMS} />;

export default FormNavigation;
