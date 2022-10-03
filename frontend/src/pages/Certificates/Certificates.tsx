import { FC } from 'react';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';

const Certificates: FC = () => (
  <HelmetPageTitle title={MENU_TITLE.certificates}>
    <h1>Certificates</h1>
  </HelmetPageTitle>
);

export default Certificates;
