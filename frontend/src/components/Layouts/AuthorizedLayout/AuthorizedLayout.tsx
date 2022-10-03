import { FC } from 'react';
import { Layout } from 'antd';

import HeaderTitleProvider from 'components/HeaderTitleProvider';

import { SideMenu, Header } from './components';
import AuthorizedRoutes from './AuthorizedRoutes';
import { StyledLayout, StyledContent } from './styled';

const AuthorizedLayout: FC = () => (
  <HeaderTitleProvider>
    <Layout>
      <SideMenu />
      <StyledLayout>
        <Header />
        <StyledContent>
          <AuthorizedRoutes />
        </StyledContent>
      </StyledLayout>
    </Layout>
  </HeaderTitleProvider>
);

export default AuthorizedLayout;
