import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/Main Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Log In/LogIn";
import SignUp from "../Pages/Sign Up/SignUp";

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
]);

export default router