import useDataCart from "../../../hooks/useDataCart";


const MyProfile = () => {

    const [cart] = useDataCart();
    console.log(cart);

    return (
        <div>

            <div>
                {
                    cart.map(carts => <div key={carts._id} className="overflow-x-auto">
                        <table className="table ">
                            {/* head */}
                            <thead >
                                <tr>
                                    <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8" >
                                        <div>
                                            <th className="text-xl font-mono">Name</th>
                                            <tr>
                                                <th>
                                                   
                                                    {carts.name}
                                                </th>
                                            </tr>
                                        </div>

                                        <div>
                                            <th className="text-xl font-mono">image</th>
                                            <tr>
                                                <th>
                                                    <img className="h-12 rounded-full" src={carts?.userImg} alt=" " />
                                                </th>
                                            </tr>
                                        </div>

                                        <div >
                                            <th className="text-xl font-mono">email</th>
                                            <tr>
                                                <td className="pt-5">
                                                    {carts?.email}

                                                </td>
                                            </tr>
                                        </div>

                                        <div>
                                            <th className=" md:pl-12 text-xl font-mono">Accept date</th>
                                            <tr>
                                                <td>{carts?.data}</td>
                                            </tr>
                                        </div>

                                        <div>
                                            <th className="md:pl-20 text-xl font-mono"> Rent</th>
                                            <tr>
                                                <th className="md:pl-20">
                                                    {carts?.rent}
                                                </th>
                                            </tr>
                                        </div>

                                        <div>
                                            <th className="text-xl font-mono"> Floor_no</th>
                                            <tr>
                                                <th>
                                                    {carts?.floor_no}
                                                </th>
                                            </tr>
                                        </div>

                                        <div>
                                            <th className="text-xl font-mono">Block</th>
                                            <tr>
                                                <th>
                                                    {carts?.block_name}
                                                </th>
                                            </tr>
                                        </div>

                                        <div>
                                            <th className="text-xl font-mono">Room no</th>
                                            <tr>
                                                <th>
                                                    {carts?.apartment_no}
                                                </th>
                                            </tr>
                                        </div>
                                    </div>









                                </tr>
                            </thead>
                           


                        </table>
                    </div>)
                }
            </div>




        </div>
    );
};

export default MyProfile;