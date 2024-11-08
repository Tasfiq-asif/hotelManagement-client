import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../pages/MyBookings/MyBookings";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/RoomDetails/RoomDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/rooms",
                element:<Rooms/>
            },
            {
                path: "/rooms/:id",
                element:<PrivateRoute>
                    <RoomDetails/>
                </PrivateRoute>,
                
            },
            {
                path:"/mybookings",
                element:(<PrivateRoute>
                    <MyBookings/>
                </PrivateRoute>),
                
            }
        ],
    }
])

export default router;