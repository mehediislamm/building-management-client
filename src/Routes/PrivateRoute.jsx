/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

       if(loading){
        return <span className="loading loading-dots loading-lg"></span>
       } 

    if(user){
        return children;
    }

    return <Navigate to={"/login"} state={{from:location}} ></Navigate>
    // return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;