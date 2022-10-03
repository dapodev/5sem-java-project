import { FC } from 'react';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';

const NotFound: FC = () => (
  <HelmetPageTitle title={MENU_TITLE.notFound}>
    <h1>Not Found</h1>
  </HelmetPageTitle>
);

export default NotFound;
