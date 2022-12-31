import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import FourOFour from "../../Pages/404/FourOFour";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Cart from "../../Pages/Dashboard/Cart/Cart";
import DashHome from "../../Pages/Dashboard/DashHome/DashHome";
import DashMain from "../../Pages/Dashboard/DashMain/DashMain";
import Products from "../../Pages/Dashboard/Products/Products";
import Report from "../../Pages/Dashboard/Report/Report";
import Users from "../../Pages/Dashboard/Users/Users";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Payment from "../../Pages/Payment/Payment";
import PaymentFailed from "../../Pages/Payment/PaymentFailed";
import PaymentSuccess from "../../Pages/Payment/PaymentSuccess";
import ProductInfo from "../../Pages/ProductInfo/ProductInfo";
import Register from "../../Pages/Register/Register";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/AllProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "product/:name",
        element: <ProductInfo></ProductInfo>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.name}`)
      },
      {
        path: '/payment',
        element: <Payment></Payment>
      },
      {
        path: '/payment/success',
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: '/payment/failed',
        element: <PaymentFailed></PaymentFailed>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashMain></DashMain></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <DashHome></DashHome>,
      },
      {
        path: "/dashboard/users",
        element: <AdminRoute><Users></Users></AdminRoute>,
      },
      {
        path: "/dashboard/products",
        element: <Products></Products>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/reports",
        element: <Report></Report>,
      },
    ],
  },
  { path: "*", element: <FourOFour></FourOFour> },
]);

export default router;