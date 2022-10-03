import { FC } from 'react';
import { Spin } from 'antd';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { PageTitle, PageSubtitle } from 'components/UnauthorizedPages';
import CustomAlert from 'components/CustomAlert';

import { MENU_TITLE } from 'constants/menu';
import { APP_ROUTE } from 'constants/appRoutes';

import ResetPasswordForm from './ResetPasswordForm';
import { PageWrapper, StyledBackToLink } from './styled';
import { RESET_PASSWORD_TEXT } from './constants';
import { IResetPasswordProps } from './types';

const ResetPassword: FC<IResetPasswordProps> = ({
  checkResetExpiredErrorMessage,
  isCheckResetExpiredLoading,
  isCheckResetExpiredError,
}) => (
  <HelmetPageTitle title={MENU_TITLE.resetPassword}>
    {isCheckResetExpiredLoading ? (
      <Spin size='large' />
    ) : (
      <PageWrapper>
        <StyledBackToLink linkPathTo={APP_ROUTE.forgotPassword}>
          {RESET_PASSWORD_TEXT.linkText}
        </StyledBackToLink>
        <PageTitle>{RESET_PASSWORD_TEXT.pageTitle}</PageTitle>
        <PageSubtitle>{RESET_PASSWORD_TEXT.pageSubTitle}</PageSubtitle>
        {isCheckResetExpiredError ? (
          <CustomAlert type='error' message={checkResetExpiredErrorMessage} />
        ) : (
          <ResetPasswordForm
            checkResetExpiredErrorMessage={checkResetExpiredErrorMessage}
            isCheckResetExpiredError={isCheckResetExpiredError}
          />
        )}
      </PageWrapper>
    )}
  </HelmetPageTitle>
);

export default ResetPassword;
