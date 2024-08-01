import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectAuthAuthenticated } from '../../redux/auth/authSelectors';
import { LOGIN_ROUTE } from 'constants/routes';

const ProtectedRoute = ({ children }) => {
  const isSignedIn = useSelector(selectAuthAuthenticated);
  return isSignedIn ? children : <Navigate replace to={LOGIN_ROUTE} />;
};

export default ProtectedRoute;
