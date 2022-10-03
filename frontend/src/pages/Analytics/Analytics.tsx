import { FC } from 'react';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';

const Analytics: FC = () => (
  <HelmetPageTitle title={MENU_TITLE.analytics}>
    <h1>Analytics</h1>
  </HelmetPageTitle>
);

export default Analytics;
