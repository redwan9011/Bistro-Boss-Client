import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useEffect, useState } from "react";



const PaymentHistory = () => {
const {user} = UseAuth()
console.log(user?.email);
//  const [payments , setPayments] = useState([]) 

const axiosSecure = UseAxiosSecure()

    const {data: payments =[]} = useQuery({
        queryKey: [ 'payment' , user.email],
        queryFn: async()=> {
            const res =await axiosSecure.get(`/payment/${user.email}`)
            console.log(res.data);
            return res.data
        }
       
    })
    console.log(payments);

//  useEffect( ()=> {
//     axiosSecure.get(`/payment/${user.email}`)
//     .then(res => setPayments(res.data))
//  }, [axiosSecure, user.email])
    return (
        <div>
            Payment History : {payments.length}

            <div className="overflow-x-auto">
  <table className="table table-zebra text-center">
    {/* head */}
    <thead >
      <tr className=" text-xl">
        <th >Email</th>
        <th>Transjaction Id</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
     
     {
        payments.map(item =>  <tr key={item._id}>
            <td>{item?.email}</td>
            <td>{item?.transjactionId}</td>
            <td>{item?.payment}</td>
            <td>{item?.date}</td>
            <td>{item?.status}</td>
          </tr>)
     }
    
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;