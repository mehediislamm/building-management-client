import { Link } from "react-router-dom";
import useDataCart from "../../../hooks/useDataCart";
 

const MakePayment = () => {
    const [carts] = useDataCart();
    const TotalRent = carts.reduce((total, item) => total + item.rent, 0)
   
 
    return (
        <div>
            <div className="flex gap-20 justify-center mb-10">
                <h1 className="text-xl font-bold text-center">Total_rent: {TotalRent}</h1>
                <Link to="/dashboard/payment">
                    <button   className="btn btn-primary btn-xs ">pay</button>
                </Link>
            </div>

            {
                carts.map(cartData => <div key={cartData._id} className="overflow-x-auto w-52 md:w-[500px] lg:w-[900px]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>email</th>
                                <th>floor</th>
                                <th>block name</th>
                                <th>apartment no</th>
                                <th>rent</th>
                                <th>coupon</th>
                                <th>month</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>

                                <td>
                                    {cartData?.name}
                                </td>
                                <td>{cartData?.email}</td>
                                <td>{cartData?.block_name}</td>
                                <td>{cartData?.floor_no}</td>
                                <td>{cartData?.apartment_no}</td>
                                <td>{cartData?.rent}</td>
                                
                                <td>
                                    <input   className="w-16 input input-bordered input-accent  h-6" type="text" name="text" id="" />
                                </td>
                                <td>
                                     <input    type="date" name="date" id="" />
                                </td>
                                    
                                 
                                   
                                 
                               

                            </tr>

                        </tbody>

                    </table>
                </div>)
            }
        </div>
    );
};

export default MakePayment;