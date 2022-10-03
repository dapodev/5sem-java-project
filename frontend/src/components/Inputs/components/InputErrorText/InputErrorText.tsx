import { FC } from 'react';

import { MessageWrapper, StyledText, StyledInfoCircleIcon } from './styled';
import { IInputErrorTextProps } from './types';

const InputErrorText: FC<IInputErrorTextProps> = ({ errorMessage }) => (
  <MessageWrapper>
    <StyledInfoCircleIcon />
    <StyledText>{errorMessage}</StyledText>
  </MessageWrapper>
);

export default InputErrorText;
