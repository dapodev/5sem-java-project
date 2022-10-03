import { DebouncedFunc } from 'lodash';
import { BaseSyntheticEvent } from 'react';

export interface IDealersProps {
  page: number;
  query: string;
  isAdminRole: boolean;
  setPage: (page: number) => void;
  onPressEnter: ({ target }: BaseSyntheticEvent) => void;
  debounceOnChange: DebouncedFunc<({ target }: BaseSyntheticEvent) => void>;
  dealersResponse?: TDealer[];
}

export type TDealer = {
  accreditation: number;
  address: string;
  businessStarted: Date;
  companyName: string;
  email: string;
  facebook: string;
  finCENLicenseNumber: string;
  finCENLicenseWebsiteUrl: string;
  headquaters: number;
  instagram: string;
  phoneNumber: string;
  rating: number;
  stateLicenseNumber: string;
  stateLicenseWebsiteUrl: string;
  twitter: string;
  url: string;
  website: string;
  yearsInBusiness: number;
  youtube: string;
  _id: string;
};
