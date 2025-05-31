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
        axiosPublic()
            .then(res => {
                setLichee(res.data)
                console.log(res.data)
            })
    }, [])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                lichee.map(item => <FeaturedCard item={item}></FeaturedCard>)
            }
        </div>
    );
};

export default FeaturedProducts;