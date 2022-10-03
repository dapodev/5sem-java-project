import { FC } from 'react';

import { DEALERS_PAGE_CONTENT } from 'pages/Dealers/constants';

import { StyledButton } from './styled';
import { IAddDealerButtonProps } from './types';

const AddDealerButton: FC<IAddDealerButtonProps> = ({
  handleAddDealerClick,
  ...props
}) => (
  <StyledButton onClick={handleAddDealerClick} {...props}>
    {DEALERS_PAGE_CONTENT.ADD_BUTTON_TEXT}
  </StyledButton>
);

export default AddDealerButton;
