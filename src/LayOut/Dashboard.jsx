import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { PiMegaphoneBold } from "react-icons/pi";
import { FaHome, FaUsers, } from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import { RiCoupon3Line } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    //TODO: get isAdmin value from the database 
    const [isAdmin] = useAdmin();

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
                                <NavLink className="text-white " to="/dashboard/manageMember">
                                    <button className="btn btn-outline  flex items-center gap-3 w-full"> <FaUsers size={20} />   Manage Members </button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/adminAnnouncement">
                                    <button className="btn btn-outline flex items-center gap-3 w-full"> <PiMegaphoneBold size={20} />Make Announcements </button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/agreementRequest">
                                    <button className="btn btn-outline flex items-center gap-3 w-full "> <VscRequestChanges size={20} />  Agreement Requests </button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/announcements">
                                    <button className="btn btn-outline flex items-center gap-3 w-full ">  <RiCoupon3Line />
                                        Manage Coupons </button>
                                </NavLink>
                            </li>

                        </> :
                            <>
                                <li className="mb-3">
                                    <NavLink className="text-white " to="/dashboard/myProfile">
                                        <button className="btn btn-outline  flex items-center gap-3 w-full ">  <CgProfile size={20}></CgProfile>  My Profile </button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-white " to="/dashboard/announcements">
                                        <button className="btn btn-outline flex items-center gap-3 w-full "><PiMegaphoneBold size={20}></PiMegaphoneBold>  Announcements </button>
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