import React from 'react';
import { Link } from 'react-router-dom';
import UseCart from '../Hooks/UseCart';
import UseUsers from '../Hooks/UseUsers';

const CartNavbar = () => {
    const [cart] = UseCart()
    const [user] = UseUsers()
    console.log(user)
    const admin = false

    return (
        <div>
            {
                admin ?
                    <div className='mt-18 bg-blue-600 pr-15 h-screen '>
                        <button className='btn mt-3 ml-6 '>
                            <Link to='/dashboard/totalUsers' className='font-bold '>Total Users {admin.role}</Link> <br />
                        </button>
                    </div> :
                    <div className='mt-18 bg-red-400 pr-15 h-screen '>
                        <button className='btn mt-5 ml-10 p-5'>
                            <Link to='/dashboard/totalCart' className='font-bold'>My Cart ({cart.length})</Link>
                        </button>
                    </div>
            }
        </div>
    );
};

export default CartNavbar;