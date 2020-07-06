import React, { lazy, FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../layout/index';
import LoginPage from '../pages/login';
const DashboardPage = lazy(() => import('../pages/dashboard'));

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route path={'dashboard'} element={<DashboardPage />} />
        </Route>
        {/* <AuthRoute path={'dashboard'} element={<Dashboard />} />
          <Route path={'energy'}>
            <AuthRoute
              path={''}
              element={<EnergyConsumptionStatisticsPage />}
            />
            <AuthRoute path={'monitor'} element={<MonitorPage />} />
          </Route>
  </Route>*/}
        <Route path={'/login'} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
