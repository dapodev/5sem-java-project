import { EMPTY_STRING } from 'config/constants';

import { ForgotPasswordField } from './types';

export const INITIAL_FORGOT_PASSWORD_VALUES = {
  [ForgotPasswordField.email]: EMPTY_STRING,
};

export const FORGOT_PASSWORD_TEXT = {
  sendLinkButtonText: 'Send link to email',
  inputLabel: 'Email',
  resendButtonDescription:
    'The Resend button will be available after 2 minutes.',
  didntReceiveEmail: "Didn't receive an email?",
  resendButtonText: 'Resend',
  linkToForgotText: 'Back to Forgot Password',
  linkToSignInText: 'Back to Sign In',
  verifyPageTitle: 'Verify Your Email',
  forgotPageTitle: 'Forgot password?',
  forgotPageSubTitle: 'Enter your email and we will send you a reset link',
};

export const RESEND_LINK_TIMER_DURATION_MS = 120000;
export const INITIAL_TIMER_VALUE = 0;

export const SERVER_ERROR_STRING = 'Something went wrong. Please try again';
