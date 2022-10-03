import { FC } from 'react';
import { useLocation } from 'react-router';

import UnauthorizedLayout from './UnauthorizedLayout';
import { getIsWithoutWelcomeMessage } from './utils';

const UnauthorizedLayoutContainer: FC = () => {
  const { pathname } = useLocation();

  const isWithoutWelcomeMessage = getIsWithoutWelcomeMessage(pathname);

  return (
    <UnauthorizedLayout isWithoutWelcomeMessage={isWithoutWelcomeMessage} />
  );
};

export default UnauthorizedLayoutContainer;
