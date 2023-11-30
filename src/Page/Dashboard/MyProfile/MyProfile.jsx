import useDataCart from "../../../hooks/useDataCart";


const MyProfile = () => {

    const [cart] = useDataCart();
    // console.log(cart);

    return (
        <div className="overflow-x-scroll">
            {
                cart.map(carts => <div key={carts._id} className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead >
                            <tr>
                                
                                <th>image</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>flor</th>
                                <th>block</th>
                                <th>room</th>
                                <th>rent</th>
                               <th>date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                               
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
                                <td>{carts?.name}</td>
                                </td>
                                <td>
                                    {carts?.email}
                                </td>
                                <td>{carts?.floor_no}</td>
                                <td>{carts?.block_name}</td>
                                <td>{carts?.apprtment_no}</td>
                                <td>{carts?.rent}</td>
                                <td>{carts?.data}</td>
                            </tr>
                           
                        </tbody>
                     

                    </table>
                </div>)
            }
        </div>
    );
};

export default MyProfile;