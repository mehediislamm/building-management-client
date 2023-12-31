import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

 

const useMember = () => {
    const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const {data:isMember}= useQuery({
    queryKey:[user?.email, 'isMember'],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/users/member/${user.email}`);
        // console.log(res.data);
        return res.data?.member;

    }
  })
  return [isMember];
};


export default useMember;