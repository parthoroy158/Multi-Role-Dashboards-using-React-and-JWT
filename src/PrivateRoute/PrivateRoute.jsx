import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = UseAuth()

    if (user) {
        return children;
    }
    if (loading) {
        return <div className='flex justify-around items-center h-screen '>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }
    return <Navigate to='/logIn' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;