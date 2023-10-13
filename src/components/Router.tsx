import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './Outlet';
import DataListPage from 'src/components/pages/DataListPage';
import DetailsDataPage from 'src/components/pages/DetailsDataPage';
import PageNotFound from 'src/components/pages/PageNotFound';

const Router = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<DataListPage />} />
      <Route path='details/:itemId' element={<DetailsDataPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  </Routes>
);

export default Router;
