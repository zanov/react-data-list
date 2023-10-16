import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './Outlet';
import DataListPage from 'Pages/DataListPage';
import DetailsDataPage from 'Pages/DetailsDataPage';
import PageNotFound from 'Pages/PageNotFound';

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
