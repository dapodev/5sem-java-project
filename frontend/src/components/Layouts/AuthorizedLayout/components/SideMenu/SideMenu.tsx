import { FC } from 'react';

import { logo } from 'assets/images';
import { MENU_WIDTH } from 'constants/menu';

import {
  InnerWrapper,
  LogoutLink,
  LogoutWrapper,
  LogoWrapper,
  SiderWrapper,
  StyledMenu as Menu,
  StyledSider,
} from './styled';
import { ISideMenuProps } from './types';
import LogoutIcon from './LogoutIcon';

export const SideMenu: FC<ISideMenuProps> = ({ menuItems, onClickLogOut }) => (
  <StyledSider width={MENU_WIDTH}>
    <SiderWrapper>
      <div>
        <LogoWrapper>
          <img src={logo} />
        </LogoWrapper>
        <Menu items={menuItems} />
      </div>
      <LogoutWrapper>
        <InnerWrapper>
          <LogoutIcon />
          <LogoutLink onClick={onClickLogOut}>Log Out</LogoutLink>
        </InnerWrapper>
      </LogoutWrapper>
    </SiderWrapper>
  </StyledSider>
);

export default SideMenu;
