import { FC } from 'react';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';

const Requests: FC = () => (
  <HelmetPageTitle title={MENU_TITLE.requests}>
    <h1>Requests</h1>
  </HelmetPageTitle>
);

export default Requests;
