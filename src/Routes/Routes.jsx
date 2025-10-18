import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <div><h1>Error Page</h1></div>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/about-us',
                Component: AboutUs
            },
            {
                path: '/profile',
                Component: Profile
            },
            {
                path: '/signin',
                Component: SignIn
            },
            {
                path: '/signup',
                Component: SignUp
            }
        ]
    },
]);