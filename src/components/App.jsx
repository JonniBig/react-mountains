import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { HOME_ROUTE, MOUNTAIN_ROUTE } from 'constants/routes';
import ScrollToTopButton from './Scroll/Scroll';

const Home = React.lazy(() => import('pages/Home/Home'));
const MountDetails = React.lazy(() =>
  import('pages/MountDetails/MountDetails')
);
const NotFound = React.lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route
            path={`${MOUNTAIN_ROUTE}/:mountainName`}
            element={<MountDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ScrollToTopButton />
    </Layout>
  );
};
