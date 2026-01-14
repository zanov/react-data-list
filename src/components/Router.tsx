import React, {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';

const DataListPage = React.lazy(() => import('Pages/DataListPage'));
const DetailsDataPage = React.lazy(() => import('Pages/DetailsDataPage'));
const PageNotFound = React.lazy(() => import('Pages/PageNotFound'));

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route index element={<DataListPage />} />
      <Route path='details/:itemId' element={<DetailsDataPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </Suspense>
);

export default Router;
