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
import MakePayment from "../Page/Dashboard/Make Payment/MakePayment";
import Payment from "../Page/Dashboard/Payment/Payment";
import PaymentHistory from "../Page/Dashboard/paymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";




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
            element:<PrivateRoute><Apartment></Apartment></PrivateRoute>,
            loader: () => fetch('https://building-management-server-six.vercel.app/DataCount')
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
          element:<AdminRoute><ManageMember></ManageMember></AdminRoute>
        },
        {
          path:'makePayment',
          element:<MakePayment></MakePayment>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'announcements',
          element:<Announcements></Announcements>
        },
        {
          path:'adminProfile',
          element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
        },
        {
          path:'adminAnnouncement',
          element:<AdminRoute><AdminAnnouncement></AdminAnnouncement></AdminRoute>
        },
        {
          path:'agreementRequest',
          element:<AdminRoute><AgreementRequest></AgreementRequest></AdminRoute>
        },
      ]
    }
  ]);