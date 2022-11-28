import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../../context/PrivateRoute/PrivateRoute";
import Blog from "../../Pages/Blog/Blog/Blog";
import CatagoryWiseProduct from "../../Pages/CatagoryWiseProduct/CatagoryWiseProduct";
import AddProducts from "../../Pages/Dashbord/AddProducts/AddProducts";
import AllSeller from "../../Pages/Dashbord/AllSeller/AllSeller";
import MyOrder from "../../Pages/Dashbord/MyOrder/MyOrder";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home/Home";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import DashbordLayout from "../Layout/DashbordLayout";
import Main from "../Layout/Main";
import Login from "../Sheard/Login/Login";
import Register from "../Sheard/Register/Register";
import AdminRoute from "./AdminRoute/AdminRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement : <ErrorElement />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/home',
        element:<Home />
      },
      {
        path:'/blog',
        element:<Blog />
      },
      {
        path:'/myproduct',
        element:<MyProducts />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },
      {
        path:'/categoris/:id',
        loader: ({params}) => fetch(`https://b612-used-products-resale-server-side-coderpbt.vercel.app/categoris/${params.id}`),
        element : <PrivateRoute><CatagoryWiseProduct /></PrivateRoute>
      }

    ]
  },
  {
    path : '/dashboard',
    element : <PrivateRoute><DashbordLayout /></PrivateRoute>,
    children : [
      {
        path: '/dashboard',
        element: <MyOrder />
      },
      {
        path: '/dashboard/allseller',
        element: <AdminRoute><AllSeller /></AdminRoute>
      },
      {
        path: '/dashboard/addproduct',
        element: <AddProducts />
      }
    ]
  }

]);


