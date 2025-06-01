import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = UseAuth()

    if (user) {
        return children;
    }
    if (loading) {
        return <div className='flex justify-around items-center h-screen '>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }
    return <Navigate to='/logIn'></Navigate>
};

export default PrivateRoute;