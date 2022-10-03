import { FC } from 'react';

import DefaultInput from 'components/Inputs/DefaultInput';

import CountriesSelect from './CountriesSelect';
import { IPhoneNumberInputProps } from './types';

const PhoneNumberInput: FC<IPhoneNumberInputProps> = ({
  labelText,
  countriesSelectConfig,
  ...props
}) => (
  <DefaultInput
    labelText={labelText}
    addonBefore={
      <CountriesSelect countriesSelectConfig={countriesSelectConfig} />
    }
    {...props}
  />
);

export default PhoneNumberInput;
