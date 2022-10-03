import { FC } from 'react';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';

const SerialNumbers: FC = () => (
  <HelmetPageTitle title={MENU_TITLE.serialNumbers}>
    <h1>Serial Numbers</h1>
  </HelmetPageTitle>
);

export default SerialNumbers;
