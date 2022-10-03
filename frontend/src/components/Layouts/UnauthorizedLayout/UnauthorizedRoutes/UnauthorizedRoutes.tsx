import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { APP_ROUTE } from 'constants/appRoutes';
import { SignUp, SignIn, ForgotPassword, ResetPassword } from 'pages';

const UnauthorizedRoutes: FC = () => (
  <Routes>
    <Route index element={<Navigate replace to={APP_ROUTE.signIn} />} />
    <Route path={APP_ROUTE.signIn} element={<SignIn />} />
    <Route path={APP_ROUTE.signUp} element={<SignUp />} />
    <Route path={APP_ROUTE.forgotPassword} element={<ForgotPassword />} />
    <Route path={APP_ROUTE.resetPassword} element={<ResetPassword />} />
    <Route
      path={APP_ROUTE.unRegistered}
      element={<Navigate replace to={APP_ROUTE.browserBase} />}
    />
  </Routes>
);

export default UnauthorizedRoutes;
