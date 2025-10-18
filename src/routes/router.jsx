import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";





const router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews/>,
                loader: ()=> fetch("../news.json"),
            },
        ]
    },
    {
        path: "/auth",
        element: <h2>Authentication Layout</h2>,
        children: [
            {
                path: "/auth/login",
                element: <Login/>,
            },
            {
                path: "/auth/register",
                element: <Register/>
            },
        ]
    },
]);
export default router;