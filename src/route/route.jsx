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
                element:<Cart></Cart>
            }
        ]

    }
]);

export default router