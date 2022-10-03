import { FC } from 'react';

import { StyledMessage } from './styled';
import { IMessageProps } from './types';

const Message: FC<IMessageProps> = ({ message, type }) => (
  <StyledMessage type={type}>{message}</StyledMessage>
);

export default Message;
