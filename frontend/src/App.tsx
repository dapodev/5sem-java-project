import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { queryClient } from 'api/base';
import { APP_ROUTE } from 'constants/appRoutes';
import { AuthCheckRoute } from 'components/Routes';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={APP_ROUTE.browserBase}>
      <Routes>
        <Route path={APP_ROUTE.appBase} element={<AuthCheckRoute />} />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
