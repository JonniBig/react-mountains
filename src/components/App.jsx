import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  MOUNTAIN_ROUTE,
  REGISTER_ROUTE,
} from 'constants/routes';
import ScrollToTopButton from './Scroll/Scroll';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound';
import MountDetails from 'pages/MountDetails/MountDetails';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route
          path={REGISTER_ROUTE}
          element={
            <RestrictedRoute>
              <Register />
            </RestrictedRoute>
          }
        />
        <Route
          path={LOGIN_ROUTE}
          element={
            <RestrictedRoute>
              <Login />
            </RestrictedRoute>
          }
        />

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
