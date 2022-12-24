import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
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
        element: <div>About us</div>
      },
    ]
  },
  
])

export default router;