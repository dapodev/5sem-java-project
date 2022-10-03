import { FC } from 'react';

import InputBase from '../components';
import { StyledInput } from '../styled';
import { IDefaultInputProps } from '../types';

const DefaultInput: FC<IDefaultInputProps> = ({
  labelText,
  errorMessage,
  ...props
}) => (
  <InputBase labelText={labelText} errorMessage={errorMessage}>
    <StyledInput size='large' status={errorMessage && 'error'} {...props} />
  </InputBase>
);

export default DefaultInput;
