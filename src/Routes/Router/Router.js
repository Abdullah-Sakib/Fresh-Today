import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Cart from "../../Pages/Dashboard/Cart/Cart";
import DashHome from "../../Pages/Dashboard/DashHome/DashHome";
import DashMain from "../../Pages/Dashboard/DashMain/DashMain";
import Products from "../../Pages/Dashboard/Products/Products";
import Report from "../../Pages/Dashboard/Report/Report";
import Users from "../../Pages/Dashboard/Users/Users";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <div>Home</div>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'aboutUs',
        element: <AboutUs></AboutUs>
      }
      
    ]
  },
  {
    path: '/dashboard',
    element: <DashMain></DashMain>,
    children: [
      {
        path: '/dashboard',
        element: <DashHome></DashHome>
      },
      {
        path: '/dashboard/users',
        element: <Users></Users>
      },
      {
        path: '/dashboard/products',
        element: <Products></Products>
      },
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      },
      {
        path: '/dashboard/reports',
        element: <Report></Report>
      }
    ]
  }
  
])

export default router;