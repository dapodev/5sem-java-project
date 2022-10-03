import { FC } from 'react';

import { DEALERS_PAGE_CONTENT } from 'pages/Dealers/constants';

import { StyledButton, StyledRightArrow } from './styled';
import { IViewDealerButtonProps } from './types';

const ViewDealerButton: FC<IViewDealerButtonProps> = ({
  handleViewDealerClick,
}) => (
  <StyledButton type='default' size='small' onClick={handleViewDealerClick}>
    {DEALERS_PAGE_CONTENT.VIEW_BUTTON_TEXT}
    <StyledRightArrow />
  </StyledButton>
);

export default ViewDealerButton;
