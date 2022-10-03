import { FC } from 'react';

import { ICountriesSelectProps } from './types';
import { StyledSelect, StyledOption } from './styled';

const CountriesSelect: FC<ICountriesSelectProps> = ({
  countriesSelectConfig,
}) => {
  const defaultSelectValue = countriesSelectConfig[0]?.value;

  return (
    <StyledSelect defaultValue={defaultSelectValue}>
      {countriesSelectConfig.map(({ value, option }) => (
        <StyledOption key={value} value={value}>
          {option}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default CountriesSelect;
