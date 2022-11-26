import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../../context/PrivateRoute/PrivateRoute";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog/Blog";
import CatagoryWiseProduct from "../../Pages/CatagoryWiseProduct/CatagoryWiseProduct";
import AllSeller from "../../Pages/Dashbord/AllSeller/AllSeller";
import MyOrder from "../../Pages/Dashbord/MyOrder/MyOrder";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home/Home";
import DashbordLayout from "../Layout/DashbordLayout";
import Main from "../Layout/Main";
import Login from "../Sheard/Login/Login";
import Register from "../Sheard/Register/Register";


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
        path:'/login',
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },
      {
        path:'/addservice',
        element:<PrivateRoute><AddServices /></PrivateRoute>
      },
      {
        path:'/categoris/:id',
        loader: ({params}) => fetch(`http://localhost:5000/categoris/${params.id}`),
        element : <CatagoryWiseProduct />
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
        element: <AllSeller />
      }
    ]
  }

]);