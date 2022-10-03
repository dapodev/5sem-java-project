import { FormikHandlers, FormikState } from 'formik';

export enum DealerDetailsFormField {
  COMPANY_NAME = 'companyName',
  BUSINESS_STARTED = 'businessStarted',
  YEARS_IN_BUSINESS = 'yearsInBusiness',
  HEADQUATERS = 'headquaters',
  RATING = 'rating',
  ACCREDITATION = 'accreditation',
  URL = 'url',
  EMAIL = 'email',
  PHONE_NUMBER = 'phoneNumber',
  ADDRESS = 'address',
  WEBSITE = 'website',
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  YOUTUBE = 'youtube',
  INSTAGRAM = 'instagram',
  STATE_LICENSE_NUMBER = 'stateLicenseNumber',
  STATE_LICENSE_WEBSITE_URL = 'stateLicenseWebsiteURL',
  FINCEN_LICENSE_NUMBER = 'finCENLicenseNumber',
  FINCEN_LICENSE_WEBSITE_URL = 'finCENLicenseWebsiteURL',
}

export interface IDealerDetailsFormValues {
  [DealerDetailsFormField.COMPANY_NAME]: string;
  [DealerDetailsFormField.BUSINESS_STARTED]: Date;
  [DealerDetailsFormField.YEARS_IN_BUSINESS]?: number;
  [DealerDetailsFormField.HEADQUATERS]?: number;
  [DealerDetailsFormField.RATING]?: number;
  [DealerDetailsFormField.ACCREDITATION]?: number;
  [DealerDetailsFormField.URL]: string;
  [DealerDetailsFormField.EMAIL]: string;
  [DealerDetailsFormField.PHONE_NUMBER]: string;
  [DealerDetailsFormField.ADDRESS]: string;
  [DealerDetailsFormField.WEBSITE]: string;
  [DealerDetailsFormField.FACEBOOK]: string;
  [DealerDetailsFormField.TWITTER]: string;
  [DealerDetailsFormField.YOUTUBE]: string;
  [DealerDetailsFormField.INSTAGRAM]: string;
  [DealerDetailsFormField.STATE_LICENSE_NUMBER]: string;
  [DealerDetailsFormField.STATE_LICENSE_WEBSITE_URL]: string;
  [DealerDetailsFormField.FINCEN_LICENSE_NUMBER]: string;
  [DealerDetailsFormField.FINCEN_LICENSE_WEBSITE_URL]: string;
}

export type TDealerDetailsFormikConfig = FormikHandlers &
  FormikState<IDealerDetailsFormValues>;

export interface IDealerDetailsFormProps {
  formik: TDealerDetailsFormikConfig;
  errorMessage?: string;
}
