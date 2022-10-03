import { FC } from 'react';
import { Pagination } from 'antd';

import {
  DealersContainer,
  DealersWrapper,
  PaginationWrapper,
  StyledText,
} from './styled';
import { IDealersListProps } from './types';
import { DEALERS_ON_PAGE, DEALERS_PAGE_CONTENT } from '../constants';
import { DealerCard } from '../components';

const DealersList: FC<IDealersListProps> = ({
  page,
  dealers,
  query,
  setPage,
}) => (
  <>
    <DealersContainer>
      {dealers && query && (
        <StyledText>
          {dealers.length} {DEALERS_PAGE_CONTENT.RESULT_DESCRIPTION}
          &ldquo;{query}&ldquo;
        </StyledText>
      )}
      <DealersWrapper>
        {dealers?.map((dealer, index) => (
          <DealerCard key={index} {...dealer} />
        ))}
      </DealersWrapper>
    </DealersContainer>
    <PaginationWrapper>
      <Pagination
        total={dealers?.length}
        pageSize={DEALERS_ON_PAGE}
        current={page}
        showSizeChanger={false}
        onChange={setPage}
      />
    </PaginationWrapper>
  </>
);

export default DealersList;
