import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../pages/Wishlist/Wishlist";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/addBlog",
                element: <AddBlog></AddBlog>
            },
            {
                path: "/allBlogs",
                element: <AllBlogs></AllBlogs>
            },
            {
                path: "/featuredBlogs",
                element: <FeaturedBlogs></FeaturedBlogs>
            },
            {
                path: "/wishlist",
                element: <Wishlist></Wishlist>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    },
]);


export default router;