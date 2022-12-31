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
import AdminAndVendorRoute from "./Admin&VendorRoute/Admin&VendorRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import VendorRoute from "./VendorRoute/VendorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "product/:name",
        element: <ProductInfo></ProductInfo>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.name}`),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/success",
        element: (
          <PrivateRoute>
            <PaymentSuccess></PaymentSuccess>
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/failed",
        element: (
          <PrivateRoute>
            <PaymentFailed></PaymentFailed>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminAndVendorRoute>
        <DashMain></DashMain>
      </AdminAndVendorRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminAndVendorRoute>
            <DashHome></DashHome>
          </AdminAndVendorRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/products",
        element: (
          <VendorRoute>
            <Products></Products>
          </VendorRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <VendorRoute>
            <AddProduct></AddProduct>
          </VendorRoute>
        ),
      },
      {
        path: "/dashboard/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/reports",
        element: (
          <AdminRoute>
            <Report></Report>
          </AdminRoute>
        ),
      },
    ],
  },
  { path: "*", element: <FourOFour></FourOFour> },
]);

export default router;
