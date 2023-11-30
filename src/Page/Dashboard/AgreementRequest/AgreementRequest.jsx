import Swal from "sweetalert2";
import useDataCart from "../../../hooks/useDataCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AgreementRequest = () => {
    const [cart, refetch] = useDataCart();
    const axiosSecure = useAxiosSecure();


    const handleMakeUser = () =>{
        
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `accecpt member`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            
        
    }




    const handleDeleteUser = user =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

   


    return (
        <div>
            <div>
                {
                    cart.map(carts => <div  key={carts._id} className="overflow-x-auto w-52 md:w-[500px] lg:w-[900px]">
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>email</th>
                                    <th> Floor</th>
                                    <th>Room no</th>
                                    <th>Rent</th>
                                    <th>Agreement request date</th>
                                    <th>Accept button</th>
                                    <th>Reject button</th>





                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        {carts.name}
                                    </th>

                                    <td>
                                        {carts?.email}

                                    </td>
                                    <th>
                                        {carts?.floor_no}
                                    </th>
                                    <th>
                                        {carts?.apartment_no}
                                    </th>

                                    <td>{carts?.rent}</td>
                                    <td>{carts?.data}</td>
                                    <th>
                                   <button
                                        onClick={() =>handleMakeUser()}
                                        className="btn btn-accent btn-xs">
                                        Accept
                                    </button>
                                    </th>
                                    <th>
                                    <button
                                        onClick={() =>  handleDeleteUser(carts)}
                                        className="btn btn-error btn-xs">
                                        Reject
                                    </button>
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

export default AgreementRequest;