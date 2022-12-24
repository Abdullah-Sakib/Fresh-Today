import { createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Home/Products/Products";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import About from "../../Pages/About/About";
import FourOFour from "../404/FourOFour";

// This part is contributed by Tasfi

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children :[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/About',
                element: <About></About>
            },
            {
                path:'/Login',
                element: <Login></Login>
            },
            {
                path:'/Products',
                element: <Products></Products>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            }   
        ]       
    },

    { path: '*',
    element: <FourOFour></FourOFour>
   }
]);