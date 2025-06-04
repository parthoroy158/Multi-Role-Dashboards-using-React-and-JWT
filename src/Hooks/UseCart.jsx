import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosPrivate from './UseAxiosPrivate';
import UseAuth from './UseAuth';

const UseCart = () => {
    const axiosPrivate = UseAxiosPrivate()
    const { user } = UseAuth()
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosPrivate.get(`/cart?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default UseCart;