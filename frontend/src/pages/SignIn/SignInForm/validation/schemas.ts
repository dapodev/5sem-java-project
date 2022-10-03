import { object, string } from 'yup';

import { testRegexNegative } from 'utils/validation/testRegexNegative';
import {
  EMAIL_PATTERN,
  MIN_PASSWORD_LENGTH,
  VALIDATION_TEST_NAME,
} from 'constants/validations';
import { MAX_EMAIL_LENGTH } from 'components/Inputs';

import { VALIDATION_ERROR_MESSAGES } from '../constants';
import { SignInFormField } from '../types';

const emailValidationSchema = string()
  .required(VALIDATION_ERROR_MESSAGES.EMAIL_REQUIRED)
  .matches(
    EMAIL_PATTERN.GENERAL_STRUCTURE,
    VALIDATION_ERROR_MESSAGES.EMAIL_INVALID,
  )
  .matches(
    EMAIL_PATTERN.LOCAL_PART_GENERAL,
    VALIDATION_ERROR_MESSAGES.EMAIL_INVALID,
  )
  .matches(
    EMAIL_PATTERN.LOCAL_PART_BORDERS,
    VALIDATION_ERROR_MESSAGES.EMAIL_INVALID,
  )
  .test(
    VALIDATION_TEST_NAME.GENERAL_TRAILINGS,
    VALIDATION_ERROR_MESSAGES.EMAIL_INVALID,
    testRegexNegative(EMAIL_PATTERN.GENERAL_TRAILINGS),
  )
  .matches(
    EMAIL_PATTERN.DOMAIN_PART_GENERAL,
    VALIDATION_ERROR_MESSAGES.EMAIL_INVALID,
  )
  .matches(
    EMAIL_PATTERN.DOMAIN_PART_BORDERS,
    VALIDATION_ERROR_MESSAGES.EMAIL_INVALID,
  )
  .matches(
    EMAIL_PATTERN.DOMAIN_PART_TOTAL_LENGTH,
    VALIDATION_ERROR_MESSAGES.EMAIL_INVALID,
  )
  .max(MAX_EMAIL_LENGTH, VALIDATION_ERROR_MESSAGES.EMAIL_INVALID);

const passwordValidationSchema = string()
  .required(VALIDATION_ERROR_MESSAGES.PASSWORD_REQUIRED)
  .min(MIN_PASSWORD_LENGTH, VALIDATION_ERROR_MESSAGES.PASSWORD_SHORT);

export const formValidationSchema = object({
  [SignInFormField.EMAIL]: emailValidationSchema,
  [SignInFormField.PASSWORD]: passwordValidationSchema,
});
