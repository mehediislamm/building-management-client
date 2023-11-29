import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { PiMegaphoneBold } from "react-icons/pi";
import { FaHome, FaUsers, } from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import { RiCoupon3Line } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";
import Logo from "../Page/Shared/logo/logo";
import useMember from "../hooks/useMember";


const Dashboard = () => {

    //TODO: get isAdmin value from the database 
    const [isAdmin] = useAdmin();
    const [isMember] = useMember();

    return (
        <div className="flex min-h-screen mx-auto ">
            {/* dashboard side bar  */}
            <div className="w-64 min-h-screen bg-orange-400">
                <div className="p-3">
                    <Logo></Logo>
                </div>
                <ul className="p-4">

                    {
                        isAdmin ? <>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/adminProfile">
                                    <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full "> <CgProfile size={20} />  Admin Profile </button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/manageMember">
                                    <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full"> <FaUsers size={20} />   Manage Members </button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/adminAnnouncement">
                                    <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full"> <PiMegaphoneBold size={20} />Make Announcements </button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/agreementRequest">
                                    <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full "> <VscRequestChanges size={20} />  Agreement Requests </button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/announcements">
                                    <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full ">  <RiCoupon3Line />
                                        Manage Coupons </button>
                                </NavLink>
                            </li>

                        </> : isMember ? (
                            <>
                                <li className="mb-3">
                                    <NavLink className="text-white " to="/dashboard/myProfile">
                                        <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full ">  <CgProfile size={20}></CgProfile>  My Profile </button>
                                    </NavLink>
                                </li>
                                <li className="mb-3">
                                    <NavLink className="text-white " to="/dashboard/makePayment">
                                        <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full ">  <CgProfile size={20}></CgProfile>  Make Payment</button>
                                    </NavLink>
                                </li>
                                <li className="mb-3">
                                    <NavLink className="text-white " to="/dashboard/paymentHistory">
                                        <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full ">  <CgProfile size={20}></CgProfile>Payment History</button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-white " to="/dashboard/announcements">
                                        <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full"><PiMegaphoneBold size={20}></PiMegaphoneBold>  Announcements </button>
                                    </NavLink>
                                </li>
                            </>) : (<>
                                <li className="mb-3">
                                    <NavLink className="text-white " to="/dashboard/myProfile">
                                        <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full ">  <CgProfile size={20}></CgProfile>  My Profile </button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-white " to="/dashboard/announcements">
                                        <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full"><PiMegaphoneBold size={20}></PiMegaphoneBold>  Announcements </button>
                                    </NavLink>
                                </li>
                            </>)
                    }

                    {/* shared Navlink  */}

                    <div className="divider"></div>
                    <li>
                        <NavLink className="text-white " to="/">
                            <button className="  disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full ">
                                <FaHome size={20} /> Home </button>
                        </NavLink>

                    </li>

                </ul>
            </div>




            {/* dashboard content  */}
            <div className="grid p-8 ">
                
                    <Outlet></Outlet>
               
            </div>
        </div>
    );
};

export default Dashboard;