import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { PiMegaphoneBold } from "react-icons/pi";
import { FaHome, } from "react-icons/fa";


const Dashboard = () => {

    //TODO: get isAdmin value from the database 
    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard side bar  */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="p-4">

                    {
                        isAdmin ? <>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/adminProfile">
                                    <button className="btn btn-outline  flex items-center gap-3 w-full "> <CgProfile size={20} />  Admin Profile </button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/myProfile">
                                    <button className="btn btn-outline  flex items-center gap-3 w-full">   Manage Members </button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/announcements">
                                    <button className="btn btn-outline flex items-center gap-3 w-full"> <PiMegaphoneBold size={20} /> Announcements </button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/agreementRequest">
                                    <button className="btn btn-outline flex items-center gap-3 w-full ">   Agreement Requests </button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/announcements">
                                    <button className="btn btn-outline flex items-center gap-3 w-full ">   Manage Coupons </button>
                                </NavLink>
                            </li>

                        </> :
                            <>
                                <li className="mb-3">
                                    <NavLink className="text-white " to="/dashboard/myProfile">
                                        <button className="btn btn-outline  flex items-center gap-3 w-full ">    My Profile </button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-white " to="/dashboard/announcements">
                                        <button className="btn btn-outline flex items-center gap-3 w-full ">  Announcements </button>
                                    </NavLink>
                                </li>
                            </>
                    }

                    {/* shared Navlink  */}

                    <div className="divider"></div>
                    <li>
                        <NavLink className="text-white " to="/">
                            <button className="  btn btn-outline  flex items-center gap-3 w-full ">
                                <FaHome size={20} /> Home </button>
                        </NavLink>

                    </li>

                </ul>
            </div>




            {/* dashboard content  */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;