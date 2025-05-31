import axios from 'axios';
import React from 'react';


const AxiosPublic = axios.create({
    baseURL: 'lichee.json'
})
const UseAxiosPublic = () => {

    return AxiosPublic
};

export default UseAxiosPublic;