import { EMPTY_STRING } from "config/constants";

import { DealerDetailsFormField } from "./types";

export const DEALER_DETAILS_FORM_TEXT = {
  COMPANY_DETAILS_TITLE: 'Company Details',
  COMPANY_NAME_LABEL: 'Company name',
  BUSINESS_STARTED_LABEL: 'Business strated',
  YEARS_IN_BUSINESS_LABEL: 'Years in business',
  HEADQUATERS_LABEL: 'Headquaters',
  HEADQUATERS_PLACEHOLDER: 'Select state',
  BETTER_BUSINESS_BUREAU_SUBTITLE: 'Better Business Bureau',
  RATING_LABEL: 'Rating',
  RATING_PLACEHOLDER: 'Select rating',
  ACCREDITATION_LABEL: 'Accreditation',
  ACCREDITATION_PLACEHOLDER: 'Select accreditation',
  URL_LABEL: 'Url',
  CONTACT_DETAILS_TITLE: 'Contact Details',
  EMAIL_LABEL: 'Email',
  PHONE_NUMBER_LABEL: 'Phone number',
  PHONE_NUMBER_PLACEHOLDER: '+1',
  ADDRESS_LABEL: 'Address',
  WEBSITE_LABEL: 'Website',
  SOCIAL_SUBTITLE: 'Social',
  FACEBOOK_LABEL: 'Facebook',
  TWITTER_LABEL: 'Twitter',
  YOUTUBE_LABEL: 'Youtube',
  INSTAGRAM_LABEL: 'Instagram',
  LICENSING_DETAILS_TITLE: 'Licensing Details',
  STATE_LICENSE_SUBTITLE: 'State License',
  STATE_LICENSE_NUMBER_LABEL: 'Number of the License',
  STATE_LICENSE_WEBSITE_URL_LABEL: 'Website URL',
  FINCEN_LICENSE_SUBTITLE: 'FinCEN License',
  FINCEN_LICENSE_NUMBER_LABEL: 'Number of the License',
  FINCEN_LICENSE_WEBSITE_URL_LABEL: 'Website URL',
  SAVE_BUTTON_TEXT: 'Save',
  DELETE_BUTTON_TEXT: 'Delete',
};


export const INITIAL_DEALER_DETAILS_FORM_VALUES= {
  [DealerDetailsFormField.COMPANY_NAME]: EMPTY_STRING,
  [DealerDetailsFormField.BUSINESS_STARTED]: new Date(),
  [DealerDetailsFormField.YEARS_IN_BUSINESS]: undefined,
  [DealerDetailsFormField.HEADQUATERS]: undefined,
  [DealerDetailsFormField.RATING]: undefined,
  [DealerDetailsFormField.ACCREDITATION]: undefined,
  [DealerDetailsFormField.URL]: EMPTY_STRING,
  [DealerDetailsFormField.EMAIL]: EMPTY_STRING,
  [DealerDetailsFormField.PHONE_NUMBER]: EMPTY_STRING,
  [DealerDetailsFormField.ADDRESS]: EMPTY_STRING,
  [DealerDetailsFormField.WEBSITE]: EMPTY_STRING,
  [DealerDetailsFormField.FACEBOOK]: EMPTY_STRING,
  [DealerDetailsFormField.TWITTER]: EMPTY_STRING,
  [DealerDetailsFormField.YOUTUBE]: EMPTY_STRING,
  [DealerDetailsFormField.INSTAGRAM]: EMPTY_STRING,
  [DealerDetailsFormField.STATE_LICENSE_NUMBER]: EMPTY_STRING,
  [DealerDetailsFormField.STATE_LICENSE_WEBSITE_URL]: EMPTY_STRING,
  [DealerDetailsFormField.FINCEN_LICENSE_NUMBER]: EMPTY_STRING,
  [DealerDetailsFormField.FINCEN_LICENSE_WEBSITE_URL]: EMPTY_STRING,
}

export const STATES_SELECT_OPTIONS = [
  {
    value: 1,
    label: 'Alabama',
  },
  {
    value: 2,
    label: 'Alaska',
  },
  {
    value: 3,
    label: 'Arizona',
  },
  {
    value: 4,
    label: 'Arkansas',
  },
  {
    value: 5,
    label: 'California',
  },
  {
    value: 6,
    label: 'Colorado',
  },
  {
    value: 7,
    label: 'Connecticut',
  },
  {
    value: 8,
    label: 'Delaware',
  },
  {
    value: 9,
    label: 'Florida',
  },
  {
    value: 10,
    label: 'Georgia',
  },
  {
    value: 11,
    label: 'Hawaii',
  },
  {
    value: 12,
    label: 'Idaho',
  },
  {
    value: 13,
    label: 'Illinois',
  },
  {
    value: 14,
    label: 'Indiana',
  },
  {
    value: 15,
    label: 'Iowa',
  },
  {
    value: 16,
    label: 'Kansas',
  },
  {
    value: 17,
    label: 'Kentucky',
  },
  {
    value: 18,
    label: 'Louisiana',
  },
  {
    value: 19,
    label: 'Maine',
  },
  {
    value: 20,
    label: 'Maryland',
  },
  {
    value: 21,
    label: 'Massachusetts',
  },
  {
    value: 22,
    label: 'Michigan',
  },
  {
    value: 23,
    label: 'Minnesota',
  },
  {
    value: 24,
    label: 'Mississippi',
  },
  {
    value: 25,
    label: 'Missouri',
  },
  {
    value: 26,
    label: 'Montana',
  },
  {
    value: 27,
    label: 'Nebraska',
  },
  {
    value: 28,
    label: 'Nevada',
  },
  {
    value: 29,
    label: 'New Hampshire',
  },
  {
    value: 30,
    label: 'New Jersey',
  },
  {
    value: 31,
    label: 'New Mexico',
  },
  {
    value: 32,
    label: 'New York',
  },
  {
    value: 33,
    label: 'North Carolina',
  },
  {
    value: 34,
    label: 'North Dakota',
  },
  {
    value: 35,
    label: 'Ohio',
  },
  {
    value: 36,
    label: 'Oklahoma',
  },
  {
    value: 37,
    label: 'Oregon',
  },
  {
    value: 38,
    label: 'Pennsylvania',
  },
  {
    value: 39,
    label: 'Rhode Island',
  },
  {
    value: 40,
    label: 'South Carolina',
  },
  {
    value: 41,
    label: 'South Dakota',
  },
  {
    value: 42,
    label: 'Tennessee',
  },
  {
    value: 43,
    label: 'Texas',
  },
  {
    value: 44,
    label: 'Utah',
  },
  {
    value: 45,
    label: 'Vermont',
  },
  {
    value: 46,
    label: 'Virginia',
  },
  {
    value: 47,
    label: 'Washington',
  },
  {
    value: 48,
    label: 'West Virginia',
  },
  {
    value: 49,
    label: 'Wisconsin',
  },
  {
    value: 50,
    label: 'Wyoming',
  },
];

export const RATING_SELECT_OPTIONS = [
  {
    value: 1,
    label: 'A',
  },
  {
    value: 2,
    label: 'A+',
  },
  {
    value: 3,
    label: 'B',
  },
  {
    value: 4,
    label: 'B+',
  },
  {
    value: 5,
    label: 'C',
  },
  {
    value: 6,
    label: 'C+',
  },
  {
    value: 7,
    label: 'D',
  },
  {
    value: 8,
    label: 'D+',
  },
  {
    value: 9,
    label: 'F',
  },
  {
    value: 10,
    label: 'F+',
  },
];

export const ACCREDITATION_SELECT_OPTIONS = [
  {
    value: 1,
    label: 'Accredited',
  },
  {
    value: 2,
    label: 'Unaccredited ',
  },
];

export const SUBMIT_MESSAGE = 'Submit';
