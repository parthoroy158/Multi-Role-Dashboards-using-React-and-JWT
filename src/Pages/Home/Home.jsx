import React from 'react';
import { Helmet } from 'react-helmet';
import { IoMdHome } from "react-icons/io";
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xZgoF9Dfsg2PeUkrLHOjSY6P2VjQW8VkvQ&s" />
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;