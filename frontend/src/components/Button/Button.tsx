import { FC } from 'react';

import { TButtonProps } from './types';
import { StyledButton } from './styled';

export const Button: FC<TButtonProps> = ({ children, ...props }) => (
  <StyledButton type='primary' size='middle' {...props}>
    {children}
  </StyledButton>
);

export default Button;
