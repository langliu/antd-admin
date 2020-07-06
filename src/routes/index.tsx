import React, { lazy, FC } from 'react';
import { BrowserRouter, useRoutes, Route, Routes } from 'react-router-dom';

import Layout from '../layout/index';

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      {/* <Routes1 /> */}
      <Routes>
        <Route path={'/'} element={<Layout />}></Route>
        {/* <AuthRoute path={'dashboard'} element={<Dashboard />} />
          <Route path={'energy'}>
            <AuthRoute
              path={''}
              element={<EnergyConsumptionStatisticsPage />}
            />
            <AuthRoute path={'monitor'} element={<MonitorPage />} />
          </Route>
        </Route>
        <Route path={'/login'} element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
