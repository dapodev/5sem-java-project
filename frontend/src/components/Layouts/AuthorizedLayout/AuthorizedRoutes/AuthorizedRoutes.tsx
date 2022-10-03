import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { RoleRoute } from 'components/Routes';
import { UserRoles } from 'types/userRoles';
import { APP_ROUTE } from 'constants/appRoutes';
import {
  Dashboard,
  Requests,
  SerialNumbers,
  Certificates,
  Customers,
  Employees,
  Dealers,
  Analytics,
  DealerDetails,
} from 'pages';

const AuthorizedRoutes: FC = () => (
  <Routes>
    <Route index element={<Navigate replace to={APP_ROUTE.dashboard} />} />
    <Route element={<RoleRoute acceptedRoles={[UserRoles.ADMIN]} />}>
      <Route path={APP_ROUTE.dashboard} element={<Dashboard />} />
      <Route path={APP_ROUTE.requests} element={<Requests />} />
      <Route path={APP_ROUTE.serialNumbers} element={<SerialNumbers />} />
      <Route path={APP_ROUTE.certificates} element={<Certificates />} />
      <Route path={APP_ROUTE.customers} element={<Customers />} />
      <Route path={APP_ROUTE.employees} element={<Employees />} />
      <Route path={APP_ROUTE.dealers}>
        <Route index element={<Dealers />} />
        <Route path={APP_ROUTE.addDealer} element={<DealerDetails />} />
        <Route path={APP_ROUTE.dealerDetails} element={<DealerDetails />} />
      </Route>
      <Route path={APP_ROUTE.analytics} element={<Analytics />} />
    </Route>
    <Route
      path={APP_ROUTE.unRegistered}
      element={<Navigate replace to={APP_ROUTE.browserBase} />}
    />
  </Routes>
);

export default AuthorizedRoutes;
