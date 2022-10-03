import { FC } from 'react';
import { Link } from 'react-router-dom';

import BackToLink from 'components/BackToLink';
import { USER } from 'constants/mocks';
import { APP_ROUTE } from 'constants/appRoutes';

import UserAvatar from './UserAvatar';
import {
  HeaderTitle,
  HeaderTitleWrapper,
  HeaderWrapper,
  UserInfoWrapper,
  UserName,
  UserRole,
} from './styled';
import { IHeaderProps } from './types';
import { BACK_LINK_TEXT } from '../constants';

const Header: FC<IHeaderProps> = ({ headerTitle, backLinkPath }) => (
  <HeaderWrapper>
    <HeaderTitleWrapper>
      {backLinkPath && (
        <BackToLink linkPathTo={backLinkPath}>{BACK_LINK_TEXT}</BackToLink>
      )}
      <HeaderTitle>{headerTitle}</HeaderTitle>
    </HeaderTitleWrapper>
    <UserInfoWrapper>
      <UserName>Hi, {USER.name}</UserName>
      <UserRole>{USER.role}</UserRole>
      <Link to={APP_ROUTE.dashboard}>
        <UserAvatar />
      </Link>
    </UserInfoWrapper>
  </HeaderWrapper>
);

export default Header;
