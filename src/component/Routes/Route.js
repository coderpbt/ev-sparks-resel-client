import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../../context/PrivateRoute/PrivateRoute";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog/Blog";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
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

   
    ]
  },
  {
    path:'*',
    element:  <ErrorElement />,
  },
]);