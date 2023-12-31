import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments=[] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto w-52 md:w-[500px] lg:w-[900px]">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Rent</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                            <th>date</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) =><tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>$ {payment.rent}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.status}</td>
                            <td>{payment.date}</td>
                        </tr>)}
                        
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;