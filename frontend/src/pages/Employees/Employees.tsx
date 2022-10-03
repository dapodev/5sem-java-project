import { FC } from 'react';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';

const Employees: FC = () => (
  <HelmetPageTitle title={MENU_TITLE.employees}>
    <h1>Employees</h1>
  </HelmetPageTitle>
);

export default Employees;
