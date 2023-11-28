import useDataCart from "../../../hooks/useDataCart";


const MyProfile = () => {

    const [cart] = useDataCart();
    console.log(cart);

    return (
        <div>
          
            <div>
                {
                    cart.map(carts=>  <div key={carts._id} className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                                <th>Image</th>
                                <th>email</th>
                                <th>Agreement accept date</th>
                                <th>Apartment Rent</th>
                                <th>Floor</th>
                                <th>Block</th>
                                <th>Room no</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    {carts.name}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={carts?.userImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                   {carts?.email}
                                    
                                </td>
                                <td>{carts?.data}</td>
                                <th>
                                    {carts?.floor_no}
                                </th>
                                <th>
                                    {carts?.block_no}
                                </th>
                                <th>
                                    {carts?.floor_no}
                                </th>
                                <th>
                                    {carts?.apartment_no}
                                </th>
                            </tr>
                            
                        </tbody>
                       
    
                    </table>
                </div>)
                }
            </div>

           
            

        </div>
    );
};

export default MyProfile;