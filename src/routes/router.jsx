import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";





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
            },
        ]
    },
]);
export default router;