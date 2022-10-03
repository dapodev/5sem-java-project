import { FC } from 'react';

import { noData } from 'assets/vectors';

import { NoDealersWrapper, NoDealersText } from './styled';
import { INoDealersProps } from './types';
import { DEALERS_PAGE_CONTENT } from '../constants';
import { AddDealerButton } from '../components';
import { StyledText } from '../DealersList/styled';

const NoDealers: FC<INoDealersProps> = ({
  query,
  isAdminRole,
  dealersNotFound,
}) => (
  <>
    {dealersNotFound && (
      <StyledText>
        {DEALERS_PAGE_CONTENT.NOT_MATCH}&ldquo;{query}&ldquo;
      </StyledText>
    )}
    <NoDealersWrapper>
      <img src={noData} />
      <NoDealersText>
        {dealersNotFound
          ? DEALERS_PAGE_CONTENT.NO_DEALERS_FOUND
          : DEALERS_PAGE_CONTENT.NO_DEALERS}
      </NoDealersText>
      {isAdminRole && !dealersNotFound && <AddDealerButton size='large' />}
    </NoDealersWrapper>
  </>
);

export default NoDealers;
