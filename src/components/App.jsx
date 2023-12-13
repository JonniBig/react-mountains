import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { HOME_ROUTE, MOUNTAIN_ROUTE } from 'constants/routes';
import ScrollToTopButton from './Scroll/Scroll';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound';
import MountDetails from 'pages/MountDetails/MountDetails';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route
          path={`${MOUNTAIN_ROUTE}/:mountainName`}
          element={<MountDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
    </Layout>
  );
};
