import { FC } from 'react';

import InputBase from 'components/Inputs/components/InputBase';

import { IDatePickerProps } from './types';
import { StyledDatePicker } from './styled';

const DatePicker: FC<IDatePickerProps> = ({ labelText, errorMessage }) => (
  <InputBase labelText={labelText} errorMessage={errorMessage}>
    <StyledDatePicker inputReadOnly />
  </InputBase>
);

export default DatePicker;
