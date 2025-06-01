import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic';
import FeaturedCard from './FeaturedCard/FeaturedCard';

const FeaturedProducts = () => {
    const [lichee, setLichee] = useState([])
    const axiosPublic = UseAxiosPublic()

    useEffect(() => {
        axiosPublic('/lichees')
            .then(res => {
                const featureLichee = res.data.filter(item => item.rating > 4.5)
                console.log(featureLichee)
                setLichee(featureLichee)

            })
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    lichee.map(item => <FeaturedCard item={item}></FeaturedCard>)
                }
            </div>
            <div className='text-center mt-5 '>
                <button className='btn btn-ghost border-b-amber-300 w-30'>View All</button>
            </div>
        </div>
    );
};

export default FeaturedProducts;