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
import PrivetRouts from "../PrivetRouts/PrivetRouts";
import Details from "../Pages/Details/Details";
import Update from "../Pages/MyJobs/Update";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
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
                element: <PrivetRouts><ApplyJobs></ApplyJobs></PrivetRouts>
            },
            {
                path: "/addJobs",
                element: <PrivetRouts><Addjobs></Addjobs></PrivetRouts>
            },
            {
                path: "/myJobs",
                element: <PrivetRouts><MyJobs></MyJobs></PrivetRouts>
            },
            {
                path: "/blogs",
                element: <Blog></Blog>
            },
            {
                path: "/details/:id",
                element: <PrivetRouts><Details></Details></PrivetRouts>
            },
            {
                path: "/update/:id",
                element: <PrivetRouts><Update></Update></PrivetRouts>
            },
        ]
    }
])

export default Router;