import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import {
  ADD_GUEST_ROUTE,
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
import { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from 'auth/base';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../redux/auth/authSlice';
import AddGuestRoute from 'pages/AddGuestRoute/AddGuestRoute';
import { doc, getDoc } from 'firebase/firestore';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const listener = onAuthStateChanged(auth, async user => {
      if (user === null) return;

      const userSnapshot = await getDoc(doc(db, 'users', user.uid));

      if (!userSnapshot.exists()) return;

      const userData = userSnapshot.data();

      const serializableUserData = {
        uid: userData.uid,
        email: userData.email,
        displayName: userData.displayName,
        photoURL: userData.photoURL,
      };
      dispatch(setAuthenticated(serializableUserData));
    });

    return listener;
  }, [dispatch]);

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
          path={ADD_GUEST_ROUTE}
          element={
            <ProtectedRoute>
              <AddGuestRoute />
            </ProtectedRoute>
          }
        />
        <Route
          path={`${MOUNTAIN_ROUTE}/:mountainName`}
          element={<MountDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};
