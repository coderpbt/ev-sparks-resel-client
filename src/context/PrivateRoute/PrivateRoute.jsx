import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../component/Sheard/Loading/Loading';
import { AuthContext } from '../DpiContext/ContextProvider';



const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation();

  if (loading) {
    return <Loading />
  }

  if (user && user?.uid) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace ></Navigate>

};

export default PrivateRoute;