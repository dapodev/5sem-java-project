import { FC } from 'react';

import { IInputLabelProps } from './types';
import { StyledLabel } from './styled';

const InputLabel: FC<IInputLabelProps> = ({ children, labelText }) => (
  <StyledLabel>
    <p>
      {labelText}
      <span>*</span>
    </p>
    {children}
  </StyledLabel>
);

export default InputLabel;
