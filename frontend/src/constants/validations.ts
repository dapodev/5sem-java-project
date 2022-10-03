export const EMAIL_PATTERN = {
  GENERAL_STRUCTURE:
    /^[A-Za-z0-9!#$%&'*+\-=?^_`.{|}~]+@[A-Za-z0-9!#$%&'*+\-=?^_`.{|}~]+$/,
  GENERAL_TRAILINGS: /(\.\.|--)/,
  LOCAL_PART_GENERAL: /^([A-Za-z0-9!#$%&'*+\-=?^_`.{|}~]){1,64}@/,
  LOCAL_PART_BORDERS:
    /^([A-Za-z0-9!#$%&'*+=?^_`{|}~]|([^-.][A-Za-z0-9!#$%&'*+\-=?^_`.{|}~]*[^-.]))@/,
  DOMAIN_PART_GENERAL:
    /@([A-Za-z0-9!#$%&'*+\-=?^_`{|}~]{1,125}\.)+[A-Za-z0-9!#$%&'*+\-=?^_`{|}~]{1,125}$$/,
  DOMAIN_PART_TOTAL_LENGTH: /@.{1,190}$/,
  DOMAIN_PART_BORDERS: /@[^-].+[^-]$/,
};

export const VALIDATION_TEST_NAME = {
  GENERAL_TRAILINGS: 'no-trailings',
  DOMAIN_BORDERS: 'no-hyphens-start-end',
};

export const MIN_PASSWORD_LENGTH = 10;
