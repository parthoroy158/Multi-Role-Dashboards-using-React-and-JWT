import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const items =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/fff'>About Us</NavLink></li>
            <li><NavLink to='/allItems'>All Items</NavLink></li>
        </>
    return (
        <div className="navbar  shadow-sm fixed z-10 dark:text-white bg-black/50 text-white max-w-7xl mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {items}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">ⓛⓘⓒⓗⓔⓔ
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/logIn'>Log In</NavLink></li>
                        <li><NavLink to='/signUp'>Sign Up</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;