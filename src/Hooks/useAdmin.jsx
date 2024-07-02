import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const useAdmin = () => {
  const {user, loading} = UseAuth()
  const axiosSecure = UseAxiosSecure()
  const {data:isAdmin} = useQuery({
    queryKey: [ user?.email, 'isAdmin'],
    enabled: !loading,
    queryFn: async ()=> {
      console.log('askign or cheacking adming' , user);
     const res = await axiosSecure.get(`/users/admin/${user?.email}`)
    //  console.log(res.data);
     return res.data
    }
  })
  // console.log(isAdmin === true);
  return [ isAdmin]
};

export default useAdmin;