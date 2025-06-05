import axios from 'axios';
const AxiosPrivate = axios.create({
    baseURL: 'http://localhost:5000'
})
const UseAxiosPrivate = () => {
    AxiosPrivate.interceptors.request.use(function (config) {
        const token = localStorage.getItem("Access-Token")
        console.log("this is the token:", token)
        config.headers.Authorization = `bearer ${token}`
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    return AxiosPrivate
};

export default UseAxiosPrivate;