 
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUserDataCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users?email=${user.email}`);
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useUserDataCart;