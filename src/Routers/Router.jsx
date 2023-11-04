import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Error from "../ErrorPage/Error";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import AllJobs from "../Pages/AllJobs/AllJobs";
import ApplyJobs from "../Pages/ApplyJobs/ApplyJobs";
import Addjobs from "../Pages/AddJobs/Addjobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Blog from "../Pages/Blog/Blog"


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/allJobs",
                element: <AllJobs></AllJobs>
            },
            {
                path: "/appliedJobs",
                element: <ApplyJobs></ApplyJobs>
            },
            {
                path: "/addJobs",
                element: <Addjobs></Addjobs>
            },
            {
                path: "/myJobs",
                element: <MyJobs></MyJobs>
            },
            {
                path: "/blogs",
                element: <Blog></Blog>
            }

        ]
    }
])

export default Router;