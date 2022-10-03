import { FC } from 'react';

import { Link } from 'components/Link';
import { APP_ROUTE } from 'constants/appRoutes';

import { DontHaveAccountMessage } from './styled';
import { UNAUTHORIZED_LAYOUT_TEXT } from '../constants';

const Header: FC = () => (
  <DontHaveAccountMessage>
    <span>{UNAUTHORIZED_LAYOUT_TEXT.DONT_HAVE_ACCOUNT}&nbsp;</span>
    <Link to={APP_ROUTE.signUp}>{UNAUTHORIZED_LAYOUT_TEXT.SIGN_UP}</Link>
  </DontHaveAccountMessage>
);

export default Header;
