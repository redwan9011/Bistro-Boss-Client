import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../LayOut/Dashboard";
import Carts from "../DashBoard/Carts/Carts";
import PrivateRouts from "./PrivateRouts";
import AllUsers from "../DashBoard/AllUsers/AllUsers";
import AddItems from "../DashBoard/AddItems/AddItems";
import AdminRout from "./AdminRout";
import ManageItems from "../DashBoard/ManageItems/ManageItems";
import UpdateItems from "../DashBoard/ManageItems/UpdateItems";
import Payment from "../DashBoard/Payment/Payment";
import PaymentHistory from "../DashBoard/PaymentHistory/PaymentHistory";
import AdminHome from "../DashBoard/AdminHome/AdminHome";
import UserHome from "../DashBoard/UserHome/UserHome";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut> ,
      children: [
        {
            path: "/",
            element: <Home></Home> ,
        },
        {
            path: "/ourmenu",
            element: <OurMenu></OurMenu> ,
        },
        {
            path: "/order",
            element: <Order></Order> ,
        },
        {
            path: "/login",
            element: <Login></Login> ,
        },
        {
            path: "/register",
            element:<Register></Register> ,
        },
      ]
    },

    {
        path: '/dashboard',
        element: <PrivateRouts><Dashboard></Dashboard></PrivateRouts> ,
        children: [
            // users routs
            {
                path: 'cart',
                element:<Carts></Carts>
            },
            {
                path: 'userHome',
                element:<UserHome></UserHome>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            

            // admin routs
            {
                path: 'allUsers',
                element:<AdminRout><AllUsers></AllUsers></AdminRout>
                
            },
            {
                path: 'adminHome',
                element: <AdminRout><AdminHome></AdminHome></AdminRout>
                
            },
            {
                path: 'addItems',
                element:<AdminRout><AddItems></AddItems></AdminRout>
                
            },
            {
                path: 'manageItems',
                element:<AdminRout><ManageItems></ManageItems></AdminRout>
                
            },
            {
                path: 'updateItems/:id',
                element:<AdminRout><UpdateItems></UpdateItems></AdminRout>,
                loader: ({params})=> fetch(`https://y-iota-lac.vercel.app/menus/${params.id}`)
                
            },
        ]
    }
  ]);

  export default router