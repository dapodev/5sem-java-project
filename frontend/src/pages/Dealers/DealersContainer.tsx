import { BaseSyntheticEvent, FC, useState } from 'react';
import debounce from 'lodash.debounce';

import { useGetDealersList } from 'api/dealers';
import { EMPTY_STRING } from 'config/constants';
import { USER } from 'constants/mocks';
import { UserRoles } from 'types/userRoles';

import { DEBOUNCE_IN_MS, DEFAULT_PAGE_VALUE } from './constants';
import Dealers from './Dealers';

const DealersContainer: FC = () => {
  const isAdminRole = USER.role === UserRoles.ADMIN;

  const [page, setPage] = useState<number>(DEFAULT_PAGE_VALUE);
  const [query, setQuery] = useState<string>(EMPTY_STRING);

  const { data: dealersResponse } = useGetDealersList({ q: query });

  const updateQuery = ({ target }: BaseSyntheticEvent) => {
    setQuery(target.value.trim());
  };

  const debounceOnChange = debounce(updateQuery, DEBOUNCE_IN_MS);

  const onPressEnter = ({ target }: BaseSyntheticEvent) => {
    debounceOnChange.cancel();
    setQuery(target.value.trim());
  };

  return (
    <Dealers
      query={query}
      page={page}
      dealersResponse={dealersResponse}
      isAdminRole={isAdminRole}
      setPage={setPage}
      onPressEnter={onPressEnter}
      debounceOnChange={debounceOnChange}
    />
  );
};

export default DealersContainer;
