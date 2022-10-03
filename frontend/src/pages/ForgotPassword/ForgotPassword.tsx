import { FC } from 'react';

import { DefaultInput, MAX_EMAIL_LENGTH } from 'components/Inputs';
import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';
import { ALERT_TYPE } from 'components/Alert';
import { PageSubtitle, PageTitle } from 'components/UnauthorizedPages';
import { APP_ROUTE } from 'constants/appRoutes';

import {
  FORGOT_PASSWORD_TEXT,
  INITIAL_TIMER_VALUE,
  SERVER_ERROR_STRING,
} from './constants';
import { ForgotPasswordField, IForgotPasswordProps } from './types';
import {
  PageWrapper,
  ResendButton,
  ResendButtonWrapper,
  ResendTextWrapper,
  SendLinkButton,
  StyledAlert,
  StyledText,
  StyledBackToLink,
} from './styled';

const ForgotPassword: FC<IForgotPasswordProps> = ({
  formik,
  timer,
  errorMessage,
  isFormVisible,
  isSendLinkLoading,
  onBackLinkClick,
  onResendButtonClick,
}) => {
  const { values, errors, handleSubmit, getFieldProps } = formik;

  const isResetLinkErrorMessage =
    errorMessage && errorMessage.includes(SERVER_ERROR_STRING);

  const successResetLinkMessage = `We've sent a link to your email address: ${
    values[ForgotPasswordField.email]
  }\nPlease check your mailbox.`;

  return (
    <HelmetPageTitle title={MENU_TITLE.forgotPassword}>
      <PageWrapper>
        {isFormVisible ? (
          <div>
            <StyledBackToLink linkPathTo={APP_ROUTE.signIn}>
              {FORGOT_PASSWORD_TEXT.linkToSignInText}
            </StyledBackToLink>
            <PageTitle>{FORGOT_PASSWORD_TEXT.forgotPageTitle}</PageTitle>
            <PageSubtitle>
              {FORGOT_PASSWORD_TEXT.forgotPageSubTitle}
            </PageSubtitle>
            {errorMessage && !isResetLinkErrorMessage && (
              <StyledAlert type={ALERT_TYPE.ERROR} message={errorMessage} />
            )}
            <form onSubmit={handleSubmit}>
              <DefaultInput
                labelText={FORGOT_PASSWORD_TEXT.inputLabel}
                errorMessage={errors[ForgotPasswordField.email]}
                maxLength={MAX_EMAIL_LENGTH}
                {...getFieldProps(ForgotPasswordField.email)}
              />
              <SendLinkButton htmlType='submit' loading={isSendLinkLoading}>
                {FORGOT_PASSWORD_TEXT.sendLinkButtonText}
              </SendLinkButton>
            </form>
          </div>
        ) : (
          <div>
            <StyledBackToLink
              linkPathTo={APP_ROUTE.forgotPassword}
              onClick={onBackLinkClick}
            >
              {FORGOT_PASSWORD_TEXT.linkToForgotText}
            </StyledBackToLink>
            <PageTitle>{FORGOT_PASSWORD_TEXT.verifyPageTitle}</PageTitle>
            <StyledAlert
              type={
                isResetLinkErrorMessage ? ALERT_TYPE.ERROR : ALERT_TYPE.SUCCESS
              }
              message={
                isResetLinkErrorMessage ? errorMessage : successResetLinkMessage
              }
            />
            {timer !== INITIAL_TIMER_VALUE ? (
              <ResendTextWrapper>
                <StyledText>
                  {FORGOT_PASSWORD_TEXT.resendButtonDescription}
                </StyledText>
              </ResendTextWrapper>
            ) : (
              <ResendButtonWrapper>
                <StyledText>
                  {FORGOT_PASSWORD_TEXT.didntReceiveEmail}
                </StyledText>
                <ResendButton type='default' onClick={onResendButtonClick}>
                  {FORGOT_PASSWORD_TEXT.resendButtonText}
                </ResendButton>
              </ResendButtonWrapper>
            )}
          </div>
        )}
      </PageWrapper>
    </HelmetPageTitle>
  );
};

export default ForgotPassword;
