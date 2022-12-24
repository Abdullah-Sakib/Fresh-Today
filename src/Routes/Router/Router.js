import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";

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
        element: <div>Login</div>
      },
      {
        path: 'register',
        element: <div>Register</div>
      },
      {
        path: 'aboutUs',
        element: <div>About us</div>
      },
    ]
  },
  
])

export default router;