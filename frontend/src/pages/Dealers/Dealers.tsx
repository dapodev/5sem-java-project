import { FC } from 'react';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';
import { EMPTY_STRING } from 'config/constants';

import { DEALERS_ON_PAGE } from './constants';
import { PageWrapper } from './styled';
import { IDealersProps } from './types';
import { SearchWrapper } from './DealersList/styled';
import { AddDealerButton, SearchInput } from './components';
import NoDealers from './NoDealers';
import DealersList from './DealersList';

const Dealers: FC<IDealersProps> = ({
  page,
  query,
  dealersResponse,
  isAdminRole,
  setPage,
  onPressEnter,
  debounceOnChange,
}) => {
  const firstDealerIndex = page * DEALERS_ON_PAGE - DEALERS_ON_PAGE;
  const lastDealerIndex = page * DEALERS_ON_PAGE;

  const dealersToShow = dealersResponse?.slice(
    firstDealerIndex,
    lastDealerIndex,
  );

  const dealersNotFound = !dealersToShow?.length && query !== EMPTY_STRING;
  const isSearchVisible = !!dealersToShow?.length || query !== EMPTY_STRING;

  return (
    <HelmetPageTitle title={MENU_TITLE.dealers}>
      <PageWrapper>
        {isSearchVisible && (
          <SearchWrapper>
            <SearchInput
              value={query}
              onPressEnter={onPressEnter}
              debounceOnChange={debounceOnChange}
            />
            <AddDealerButton />
          </SearchWrapper>
        )}
        {dealersNotFound ? (
          <NoDealers
            query={query}
            isAdminRole={isAdminRole}
            dealersNotFound={dealersNotFound}
          />
        ) : (
          <DealersList
            page={page}
            dealers={dealersToShow}
            query={query}
            setPage={setPage}
            onPressEnter={onPressEnter}
            debounceOnChange={debounceOnChange}
          />
        )}
      </PageWrapper>
    </HelmetPageTitle>
  );
};

export default Dealers;
