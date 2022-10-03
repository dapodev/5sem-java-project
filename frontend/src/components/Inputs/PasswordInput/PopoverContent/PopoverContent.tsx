import { FC } from 'react';

import { StyledList } from './styled';
import { PASSWORD_POPOVER_LIST } from '../constants';

const PopoverContent: FC = () => (
  <StyledList>
    {PASSWORD_POPOVER_LIST.map((popoverText, index) => (
      <li key={index}>{popoverText}</li>
    ))}
  </StyledList>
);

export default PopoverContent;
