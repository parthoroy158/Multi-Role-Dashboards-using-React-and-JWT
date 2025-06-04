import React from 'react';
import UseCart from '../../Hooks/UseCart';

const TotalCart = () => {
    const [cart] = UseCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (

        <div className='pt-17 ml-10'>
            <div className='flex gap-10 mt-8'>
                <h3 className='text-3xl font-bold'>Total cart: {cart.length}</h3>
                <h3 className='text-3xl font-bold'>Total Price: {totalPrice} BTD</h3>
                <button className='btn btn-active'>Pay</button>
            </div>
            <div className="overflow-x-auto mt-10 text-center">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map(item => <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img className='w-full'
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.details}
                                    <br />
                                </td>
                                <td>{item.price} {item.currency}</td>
                                <th>
                                    <button className="btn btn-ghost btn-sm">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TotalCart;