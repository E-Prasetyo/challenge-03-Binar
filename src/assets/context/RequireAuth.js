/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/function-component-definition */
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ children }) => {
  const { auth } = useAuth();
  // const location = useLocation();
  // console.log(auth);
  return (
    auth?.login
      ? children
      : <Navigate to="/login" replace />
  );
};

export default RequireAuth;
