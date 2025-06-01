import axios from 'axios';
const AxiosPrivate = axios.create({
    baseURL: 'http://localhost:5000'
})
const UseAxiosPrivate = () => {
    return AxiosPrivate
};

export default UseAxiosPrivate;