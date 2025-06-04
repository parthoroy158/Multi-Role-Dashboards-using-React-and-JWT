import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/Main Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Log In/LogIn";
import SignUp from "../Pages/Sign Up/SignUp";
import DashBoard from "../Pages/DashBoard/DashBoard";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Cart from "../Pages/Cart/Cart";
import TotalCart from "../Pages/TotalCart/TotalCart";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import TotalUsers from "../Pages/TotalUsers/TotalUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/dashboard/totalCart',
                element: <TotalCart></TotalCart>
            },
            {
                path: '/dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: '/dashboard/totalUsers',
                element: <TotalUsers></TotalUsers>
            }
        ]

    }
]);

export default router