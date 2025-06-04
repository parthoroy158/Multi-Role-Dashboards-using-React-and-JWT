import React from 'react';
import { Link } from 'react-router-dom';
import UseCart from '../Hooks/UseCart';

const CartNavbar = () => {
    const [cart] = UseCart()
    const admin = true
    return (
        <div className='mt-18 bg-blue-600 pr-15 h-screen '>
            {
                admin ?
                    <div>
                        <button className='btn mt-3 ml-6 '>
                            <Link to='/dashboard/totalUsers' className='font-bold '>Total Users</Link> <br />
                        </button>
                    </div> :
                    <div>
                        <button className='btn mt-5 ml-10 p-5'>
                            <Link to='/dashboard/totalCart' className='font-bold'>My Cart ({cart.length})</Link>
                        </button>
                    </div>
            }
        </div>
    );
};

export default CartNavbar;