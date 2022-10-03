import { useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { apiClientWrapper } from 'api/base';
import { ApiRoutes } from 'api/routes';
import { QUERY_KEYS } from 'config/constants';
import { TDealer } from 'pages/Dealers/types';

const useGetDealersList = (params: {
  q: string;
}): UseQueryResult<TDealer[], AxiosError> => {
  return useQuery(
    [QUERY_KEYS.DEALERS_LIST, params],
    async () => {
      const apiClient = apiClientWrapper();
      const response = await apiClient.get(ApiRoutes.DEALERS, {
        params,
      });
      return response.data;
    },
    {
      initialData: [],
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );
};

export default useGetDealersList;
