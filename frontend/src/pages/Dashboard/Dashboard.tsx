import { FC } from 'react';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';

const Dashboard: FC = () => (
  <HelmetPageTitle title={MENU_TITLE.dashboard}>
    <h1>Dashboard</h1>
  </HelmetPageTitle>
);

export default Dashboard;
