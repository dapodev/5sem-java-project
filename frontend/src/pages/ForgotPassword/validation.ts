import { object, string } from 'yup';

import { EMAIL_VALIDATION_MESSAGES } from 'constants/messages';
import { EMAIL_PATTERN, VALIDATION_TEST_NAME } from 'constants/validations';
import { testRegexNegative } from 'utils/validation/testRegexNegative';
import { MAX_EMAIL_LENGTH } from 'components/Inputs';

import { ForgotPasswordField } from './types';

const emailValidationSchema = string()
  .required(EMAIL_VALIDATION_MESSAGES.requiredEmail)
  .matches(
    EMAIL_PATTERN.GENERAL_STRUCTURE,
    EMAIL_VALIDATION_MESSAGES.invalidEmail,
  )
  .matches(
    EMAIL_PATTERN.LOCAL_PART_GENERAL,
    EMAIL_VALIDATION_MESSAGES.invalidEmail,
  )
  .matches(
    EMAIL_PATTERN.LOCAL_PART_BORDERS,
    EMAIL_VALIDATION_MESSAGES.invalidEmail,
  )
  .test(
    VALIDATION_TEST_NAME.GENERAL_TRAILINGS,
    EMAIL_VALIDATION_MESSAGES.invalidEmail,
    testRegexNegative(EMAIL_PATTERN.GENERAL_TRAILINGS),
  )
  .matches(
    EMAIL_PATTERN.DOMAIN_PART_GENERAL,
    EMAIL_VALIDATION_MESSAGES.invalidEmail,
  )
  .matches(
    EMAIL_PATTERN.DOMAIN_PART_BORDERS,
    EMAIL_VALIDATION_MESSAGES.invalidEmail,
  )
  .matches(
    EMAIL_PATTERN.DOMAIN_PART_TOTAL_LENGTH,
    EMAIL_VALIDATION_MESSAGES.invalidEmail,
  )
  .max(MAX_EMAIL_LENGTH, EMAIL_VALIDATION_MESSAGES.invalidEmail);

export const forgotPasswordValidationSchema = object({
  [ForgotPasswordField.email]: emailValidationSchema,
});
