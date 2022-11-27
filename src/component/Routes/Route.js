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
        loader: ({params}) => fetch(`http://localhost:5000/categoris/${params.id}`),
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
        element: <AllSeller />
      },
      {
        path: '/dashboard/addproduct',
        element: <AddProducts />
      }
    ]
  }

]);



/*


Your homepage will have a navbar , a banner/slider, Advertised items, second-hand product categories section and a realistic footer.

Add one extra section on the home page. Make sure it is unique and relevant to your website.

You will have to decide what would be the categories of the second-hand product you have selected. For instance, if your website is about second-hand furniture, you can divide your categories into the bedroom, kitchen, dining room, etc.; if it is about second-hand car, your categories can be a Microbus, luxury car, electic car, etc. Or you can categorize second-hand products under brand names if you want. However, make sure it is relevant. You will need at least 3 categories, each with at least 2 products.



When the user clicks on a category on the home page, they will be redirected to the /category/:id route, where they will see second-hand products under that category only. The /category/:id page will have a column(s) of cards. It can be 1,2, or 3 columns. Each card will have a picture, name, location, resale price, original price, years of use, the time when it got posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and a Book now button. Please note, category:/id will be a private route.

On clicking the Book now button, a form in a modal will popup with the logged-in user name and email address, item name, and price(item name, price, and user information will not be editable) by default. You will give your phone number and meeting location, and lastly, there will be a submit button. After clicking the submit button, you will have to inform the buyer with a modal/toast that the item is booked.

Your navbar will have a login button. Implement email/password-based authentication and at least one social login(google, Facebook, GitHub, etc.) authentication. Create an extra field for options. There will be two options: a radio button, a dropdown, a toggle button, etc. If the user creates a seller account, he will choose the seller option. Otherwise, a normal user will have the user option selected by default. Users logged in by using social media will be considered as buyers.

Note: Do not apply email verification as it will be an inconvenience for the examiner. It is important for the examiner to be able to check your authentication without any hassle. If you want, you can add email verification after getting the assignment result.

If a user(buyer/seller/admin) is logged in, they will see logout (should be working) and another option on the header called Dashboard. The dashboard routes will change based on the users:

Buyers will see: My orders(see bonus requirement 7),

Sellers will see: Add A product (See Requirement 8), My Products(see requirement 9), My buyers(this one is optional).

Admin will see: All Sellers, All Buyers (see requirement 12), Reported Items



On the " Add A Product" route, create a form that will have fields for product name, price, condition type(excellent, good, fair), mobile number, location (Chittagong, Dhaka, etc.), product category (every product should be under a category), description, price, Year of purchase and other relevant information. After submitting the form, a modal/toast with a message will pop up to inform the user. Please remember, they must be a seller to add a product (think about the verification process for the admin access). After adding the product, you will then be redirected to the My Products Page.

On the "My Products" page, display sales status (available or sold), price, and any other relevant information you want to show. A seller will be able to delete any of his/her product. Please note there will be a special button for each unsold/available product where the seller can hit the button to advertise.

The advertised items will appear on the home page. Please note if there are no items marked as advertised, the advertised items section won't be displayed on the home page. The advertised section will only appear if there is one or more available (unsold items) are marked to be advertised.

" My buyers" are optional. See the optional section for details. On this page, a seller will see the buyer's phone, name, email address, and location.

In the All Sellers, the Admin will see the sellers. On the All Buyers route, the Admin can see all the Buyers. If the Admin wants, he can delete any buyers or sellers.



*/