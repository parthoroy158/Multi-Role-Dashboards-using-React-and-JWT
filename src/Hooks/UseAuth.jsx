import React, { useContext } from 'react';
import AuthContext from '../Shared/AuthContext';

const UseAuth = () => {
    const UseAuth = useContext(AuthContext)
    return UseAuth;
};

export default UseAuth;