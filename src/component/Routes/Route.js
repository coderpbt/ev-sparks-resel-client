import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../../context/PrivateRoute/PrivateRoute";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog/Blog";
import CatagoryWiseProduct from "../../Pages/CatagoryWiseProduct/CatagoryWiseProduct";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Catagory from "../../Pages/Home/Catagory/Catagory";
import Home from "../../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Sheard/Login/Login";
import Register from "../Sheard/Register/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
      // {
      //   path:'/categoris',
      //   loader: () => fetch(`http://localhost:5000/categoris`),
      //   element : <Catagory />
      // },
      {
        path:'/categoris/:id',
        loader: ({params}) => fetch(`http://localhost:5000/categoris/${params.id}`),
        element : <CatagoryWiseProduct />
      }

    ]
  },
  {
    path:'*',
    element:  <ErrorElement />,
  },
]);