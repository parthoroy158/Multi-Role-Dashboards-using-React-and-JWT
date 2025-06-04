import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import CartNavbar from '../../Shared/CartNavbar';

const DashBoard = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='flex'>
                <CartNavbar></CartNavbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;