import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorPage from "../Page/Error/ErrorPage";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Apartment from "../Page/Apartment/Apartment";
import SignUp from "../Page/SignUp/SignUp";
import Dashboard from "../LayOut/Dashboard";
import MyProfile from "../Page/Dashboard/MyProfile/MyProfile";
import Announcements from "../Page/Dashboard/Announcements/Announcements";
import AdminProfile from "../Page/Dashboard/AdminProfile/AdminProfile";
import AgreementRequest from "../Page/Dashboard/AgreementRequest/AgreementRequest";
import ManageMember from "../Page/Dashboard/ManageMember/ManageMember";
import AdminAnnouncement from "../Page/Dashboard/AdminProfile/AdminAnnouncement/AdminAnnouncement";




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
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'myProfile',
          element:<MyProfile></MyProfile>
        },
        {
          path:'manageMember',
          element:<ManageMember></ManageMember>
        },
        {
          path:'announcements',
          element:<Announcements></Announcements>
        },
        {
          path:'adminProfile',
          element:<AdminProfile></AdminProfile>
        },
        {
          path:'adminAnnouncement',
          element:<AdminAnnouncement></AdminAnnouncement>
        },
        {
          path:'agreementRequest',
          element:<AgreementRequest></AgreementRequest>
        },
      ]
    }
  ]);