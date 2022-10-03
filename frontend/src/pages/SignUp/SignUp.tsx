import { FC } from 'react';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';

const SignUp: FC = () => (
  <HelmetPageTitle title={MENU_TITLE.signUp}>
    <h1>Sign Up</h1>
  </HelmetPageTitle>
);

export default SignUp;
