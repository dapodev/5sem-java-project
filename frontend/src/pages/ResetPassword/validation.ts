import * as Yup from 'yup';

import { PASSWORD_VALIDATION_MESSAGES } from 'constants/messages';

export const resetPasswordValidationSchema = Yup.object({
  password: Yup.string()
    .required(PASSWORD_VALIDATION_MESSAGES.createPassword)
    .matches(
      /^[a-zA-Z0-9]*$/,
      PASSWORD_VALIDATION_MESSAGES.numbersAndLettersAllowedError,
    )
    .min(10, PASSWORD_VALIDATION_MESSAGES.passwordLengthError)
    .matches(/(?=.*?[0-9])/, PASSWORD_VALIDATION_MESSAGES.oneNumberContainError)
    .matches(
      /(?=.*?[A-Z])/,
      PASSWORD_VALIDATION_MESSAGES.oneUppercaseLetterContainError,
    )
    .matches(
      /(?=.*?[a-z])/,
      PASSWORD_VALIDATION_MESSAGES.oneLowerCaseLetterContainError,
    ),
  confirmPassword: Yup.string()
    .required(PASSWORD_VALIDATION_MESSAGES.confirmPassword)
    .oneOf(
      [Yup.ref('password'), null],
      PASSWORD_VALIDATION_MESSAGES.passwordNotMatch,
    ),
});
