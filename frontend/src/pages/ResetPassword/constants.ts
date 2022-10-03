import { ResetPasswordField } from './types';

export const INITIAL_RESET_PASSWORD_VALUES = {
  [ResetPasswordField.password]: '',
  [ResetPasswordField.confirmPassword]: '',
};

export const RESET_PASSWORD_TEXT = {
  passwordLabel: 'Password',
  confirmPasswordLabel: 'Confirm Password',
  resetButtonText: 'Reset password',
  pageTitle: 'Reset password?',
  pageSubTitle:
    'Please enter your new password twice so we can verify you typed it correctly',
  linkText: 'Back to Forgot Password',
};

export const LINK_EXPIRED_SUBSTRING = 'link has expired';
