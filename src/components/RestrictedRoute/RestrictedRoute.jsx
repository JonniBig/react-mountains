import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectAuthAuthenticated } from '../../redux/auth/authSelectors';
import { HOME_ROUTE } from 'constants/routes';

const RestrictedRoute = ({ children }) => {
  const isSignedIn = useSelector(selectAuthAuthenticated);
  return isSignedIn ? <Navigate replace to={HOME_ROUTE} /> : children;
};

export default RestrictedRoute;
