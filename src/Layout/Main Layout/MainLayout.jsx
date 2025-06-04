import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import { Helmet } from 'react-helmet';
import Footer from '../../Shared/Footer';


const MainLayout = () => {
    const location = useLocation()
    const noFooter = location.pathname.includes('logIn') || location.pathname.includes('signUp') 
    return (
        <div className='max-w-7xl mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Log In</title>
                <link rel="canonical" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xZgoF9Dfsg2PeUkrLHOjSY6P2VjQW8VkvQ&s" />
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {
                noFooter ? '' : <Footer></Footer>
            }

        </div>
    );
};

export default MainLayout;