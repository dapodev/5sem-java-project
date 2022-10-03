export const MESSAGES = {
  linkSented:
    'We`ve sent a link to your email address: youremail@gmail.com \nPlease check your mailbox',
  linkExpired:
    'Looks like your reset link has expired. Please request the link again',
  passwordUpdated: 'Your password was succesfully updated.',
};

export const PASSWORD_VALIDATION_MESSAGES = {
  createPassword: 'Please create your password',
  confirmPassword: 'Please confirm your password',
  passwordNotMatch: 'Passwords do not match',
  numbersAndLettersAllowedError: 'Only Latin letters and numbers are allowed',
  passwordLengthError: 'Must contain at least 10 characters',
  oneNumberContainError: 'Must contain at least one number',
  oneUppercaseLetterContainError: 'Must contain at least one uppercase letter',
  oneLowerCaseLetterContainError: 'Must contain at least one lowercase letter',
};

export const EMAIL_VALIDATION_MESSAGES = {
  requiredEmail: 'Please enter your email',
  invalidEmail: 'Please enter a valid email address',
};
