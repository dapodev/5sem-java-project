import { apiClientWrapper } from 'api/base';

const getHello = async () => {
  const apiClient = apiClientWrapper();

  const response = await apiClient.get('/hello');
  const { data } = response;

  return data;
};

export default getHello;
