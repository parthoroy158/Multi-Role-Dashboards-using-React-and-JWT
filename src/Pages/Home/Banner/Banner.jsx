import React from 'react';
import lichee from '../../../assets/delicious-lychee-fruit.jpg'
import lichee2 from '../../../assets/red-lychee-fruit-placed-basket (1).jpg'
import lichee3 from '../../../assets/red-lychee-fruit-placed-basket (2).jpg'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
    return (
        <div>
            {/* <div className='grid grid-cols-3 mt-5'>
                <img className='h-150 w-full object-cover' src={lichee2} alt="" />
                <img className='h-150 w-full object-cover' src={lichee} alt="" />
                <img className='h-150 w-full object-cover' src={lichee3} alt="" />
            </div> */}
            <AwesomeSlider>
                <div data-src={lichee2} />
                <div data-src={lichee} />
                <div data-src={lichee3} />
            </AwesomeSlider>
        </div>
    );
};

export default Banner;