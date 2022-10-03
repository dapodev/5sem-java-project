import { FC } from 'react';

import { MENU_TITLE } from 'constants/menu';
import { MESSAGES } from 'constants/messages';
import HelmetPageTitle from 'components/HelmetPageTitle';
import CustomAlert from 'components/CustomAlert';
import { PageTitle, PageSubtitle } from 'components/UnauthorizedPages';

import { SIGN_IN_TEXT } from './constants';
import SignInForm from './SignInForm';
import { PageWrapper } from './styled';
import { ISignInProps } from './types';

const SignIn: FC<ISignInProps> = ({ isPasswordUpdated }) => (
  <HelmetPageTitle title={MENU_TITLE.signIn}>
    <PageWrapper>
      <PageTitle>{SIGN_IN_TEXT.SIGN_IN_TITLE}</PageTitle>
      <PageSubtitle>{SIGN_IN_TEXT.SIGN_IN_TIP}</PageSubtitle>
      {isPasswordUpdated && <CustomAlert message={MESSAGES.passwordUpdated} />}
      <SignInForm />
    </PageWrapper>
  </HelmetPageTitle>
);

export default SignIn;
