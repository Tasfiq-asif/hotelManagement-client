import React from 'react'
import useAuth from '../hooks/useAuth'
import Spinner from '../components/Spinner/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth()
    const location = useLocation();

    if (loading) {
        return (
          <div className="flex justify-center">
            <Spinner/>
          </div>
        );
      }
      if (user?.email) {
        return children;
      }
  return (
    <Navigate state={location.pathname} to={"/login"} replace={true}></Navigate>
  )
}

export default PrivateRoute