/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { PieChart, Pie, Legend, Cell } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const AdminProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })


    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

    //     return (
    //         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //             {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };

   

    // const pieChartData = chartData.map(data =>{
    //     return {name:data.rent, value:data.apartment_no}
    // })

    return (
        <div className="">

            <div className="flex gap-6 bg-primary text-primary-content p-5 rounded-xl ">

                <div className="">
                    <div className="stat-title flex items-center gap-5 text-xl"> <FaUsers style={20}></FaUsers> Users</div>
                    <div className="stat-value text-center">{stats.users}</div>

                </div>

                <div className="">
                    <div className="stat-title text-xl">Orders</div>
                    <div className="stat-value text-center">{stats.orders}</div>

                </div>

            </div>

            {/* <div >
                <PieChart width={400} height={400}>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend></Legend>
                </PieChart>
            </div> */}
        </div>
    );
};

export default AdminProfile;