import { FC } from 'react';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';

const Customers: FC = () => (
  <HelmetPageTitle title={MENU_TITLE.customers}>
    <h1>Customers</h1>
  </HelmetPageTitle>
);

export default Customers;
