import { FC } from 'react';

import { IInputBaseProps } from './types';
import InputLabel from '../InputLabel';
import InputErrorText from '../InputErrorText';

const InputBase: FC<IInputBaseProps> = ({
  labelText,
  errorMessage,
  children,
}) => (
  <InputLabel labelText={labelText}>
    {children}
    {errorMessage && <InputErrorText errorMessage={errorMessage} />}
  </InputLabel>
);

export default InputBase;
