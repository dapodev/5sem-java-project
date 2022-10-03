import { FC } from 'react';

import { LayoutWrapper, ContentPanel } from './styled';
import UnauthorizedRoutes from './UnauthorizedRoutes';
import LogoPanel from './LogoPanel';
import Header from './Header';
import Footer from './Footer';
import { IUnauthorizedLayoutProps } from './types';

const UnauthorizedLayout: FC<IUnauthorizedLayoutProps> = ({
  isWithoutWelcomeMessage,
}) => (
  <LayoutWrapper>
    <LogoPanel isWithoutWelcomeMessage={isWithoutWelcomeMessage} />
    <ContentPanel>
      <Header />
      <UnauthorizedRoutes />
      <Footer />
    </ContentPanel>
  </LayoutWrapper>
);

export default UnauthorizedLayout;
