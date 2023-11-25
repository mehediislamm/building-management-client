import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorPage from "../Page/Error/ErrorPage";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Apartment from "../Page/Apartment/Apartment";
import SignUp from "../Page/SignUp/SignUp";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'apartment',
            element:<Apartment></Apartment>,
            loader: () => fetch('http://localhost:5000/DataCount')
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        
      ]
    },
  ]);